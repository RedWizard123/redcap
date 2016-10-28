<?php

//MySQL
$host="sqld.duapp.com:4050";
$AK="7d4383b2f5454519b051bc52ea3253fc";
$SK="9838ffbe0ea34e3c9afc5e7200b145e2";
$db_name="kxvvFqSopwFJKrIMEjPT";
$conn= mysql_connect($host,$AK,$SK);
if(!$conn){
    die("ERROR:".mysql_error());
}
if(!mysql_select_db($db_name,$conn)){
    die("ERROR:".mysql_error());
}

//end









//OP
if($_GET["type"]=="repair"){
	$SQL="INSERT INTO `kxvvFqSopwFJKrIMEjPT`.`RedCap_request` (
 `name` ,
`address` ,
`grade` ,
`phone` ,
`qq` ,
`item_name` ,
`problem` ,
`read` ,
`date` 
)
VALUES (
 '{$_POST['name']}', '{$_POST['address']}','{$_POST['grade']}','{$_POST['phone']}','{$_POST['qq']}','{$_POST['item_name']}', '{$_POST['problem']}','0',CURRENT_TIMESTAMP );
";
    if(mysql_query($SQL,$conn)){
        $d=array(
            "result"=>"success"
        );
        die(json_encode($d));
    }else{
        $d=array(
            "result"=>"failed",
            "reason"=>"database error!"
        );
        die(json_encode($d));
    }
}

if($_GET["type"]=="get_list"){
    if($_GET["item"]=="all"){//it wont change read state
        $SQL="SELECT * FROM `RedCap_request`";
        $r= mysql_query($SQL,$conn);
        while($row=mysql_fetch_assoc($r))
        {
            $array[]=$row;
        }
        $json=array("result"=>"success","data"=>$array);
        echo(json_encode($json));
        exit();

    }else{
        $SQL="SELECT * FROM `RedCap_request` WHERE `read`='0'";
        $r= mysql_query($SQL,$conn);
        while($row=mysql_fetch_assoc($r))
        {
            $array[]=$row;
        }
        $json=array("result"=>"success","data"=>$array);
        echo(json_encode($json));
        $SQL="UPDATE `kxvvFqSopwFJKrIMEjPT`.`RedCap_request` SET `read` = '1' WHERE `read` = '0'";
        mysql_query($SQL,$conn);
        exit();
    }
}
?>