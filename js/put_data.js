var tips={
    "name":"姓名",
    "address":"宿舍",
    "grade":"年级",
    "phone":"联系电话",
    "qq":"QQ/微信",
    "item_name":"物品名称"
};
function check_blur(obj){
    if(obj.value!=""){
        if(obj.value.length<=1){//中国人的名字也就这样了吧
            obj.style.backgroundColor="rgb(204,57,41)";
            //obj.parentNode.offsetTop-40>=window.scrollY
            var d=obj.parentNode.offsetTop-window.scrollY;
            if(d<0 || d>window.innerHeight-40){
                window.scrollTo(0,obj.parentNode.offsetTop-40);
            }

        }else{
            obj.style.backgroundColor="";
        }
    }else{
        obj.style.backgroundColor="";

    }
}
function check(){
    if($_("#name").value.length<2 || $_("#name").value.length>16){
        $_("#name").style.backgroundColor="rgb(204,57,41)";
        alert("姓名应该为2-16个字符！");
        var d=$_("#name").parentNode.offsetTop-window.scrollY;
        if(d<0 || d>window.innerHeight-40){
            window.scrollTo(0,$_("#name").parentNode.offsetTop-40);
        }
        return(0);
    }else{
        $_("#name").style.backgroundColor="";
    }

    if($_("#address").value.length<=1){
        $_("#address").style.backgroundColor="rgb(204,57,41)";
        alert("你的宿舍填写过短！");
        var d=$_("#address").parentNode.offsetTop-window.scrollY;
        if(d<0 || d>window.innerHeight-40){
            window.scrollTo(0,$_("#address").parentNode.offsetTop-40);
        }
        return(0);
    }else{
        $_("#address").style.backgroundColor="";
    }

    if($_("#grade").value.length<=1){
        $_("#grade").style.backgroundColor="rgb(204,57,41)";
        alert("你的“院系-专业-年级”填写过短！");
        var d=$_("#grade").parentNode.offsetTop-window.scrollY;
        if(d<0 || d>window.innerHeight-40){
            window.scrollTo(0,$_("#grade").parentNode.offsetTop-40);
        }
        return(0);
    }else{
        $_("#grade").style.backgroundColor="";
    }

    if($_("#phone").value.length<7 || $_("#phone").value.length>12){
        $_("#phone").style.backgroundColor="rgb(204,57,41)";
        alert("你的联系电话填写有误！应该为7~11位！");
        var d=$_("#phone").parentNode.offsetTop-window.scrollY;
        if(d<0 || d>window.innerHeight-40){
            window.scrollTo(0,$_("#phone").parentNode.offsetTop-40);
        }
        return(0);
    }else{
        $_("#phone").style.backgroundColor="";
    }

    if($_("#qq").value.length<=1){
        $_("#qq").style.backgroundColor="rgb(204,57,41)";
        alert("你的QQ或者微信填写过短！");
        var d=$_("#qq").parentNode.offsetTop-window.scrollY;
        if(d<0 || d>window.innerHeight-40){
            window.scrollTo(0,$_("#qq").parentNode.offsetTop-40);
        }
        return(0);
    }else{
        $_("#qq").style.backgroundColor="";
    }

    if($_("#item_name").value.length<=1){
        $_("#item_name").style.backgroundColor="rgb(204,57,41)";
        alert("你的电器名称填写过短！");
        var d=$_("#item_name").parentNode.offsetTop-window.scrollY;
        if(d<0 || d>window.innerHeight-40){
            window.scrollTo(0,$_("#item_name").parentNode.offsetTop-40);
        }
        return(0);
    }else{
        $_("#item_name").style.backgroundColor="";
    }


    if($_("#problem").value.length<=1 || $_("#problem").value.length>300){
        alert("问题描述请控制在300个字以内！");
        return(0);
    }



    //all right!!!
    reqwest({
        url: 'php/query.php?type=repair',
        method: 'post',
        data: {
            name: $_("#name").value,
            address:$_("#address").value,
            grade:$_("#grade").value,
            phone:$_("#phone").value,
            qq:$_("#qq").value,
            item_name:$_("#item_name").value,
            problem:$_("#problem").value
        },
        success: function(resp){
            eval("var d="+resp+";");
            if(d.result=="success"){
                window.location="success_submit.html";
            }else{
                alert("因为某些奇怪的原因没有成功提交，你可以直接联系队长。")
            }
        }
    });
}
/*/function if_login(){

}*/