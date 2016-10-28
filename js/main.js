var clicked=false;
function $_(value) {
    var obj;
    if (typeof(value) === "string") {
        if (value.charAt(0) === "#") {
            //alert(value.slice(1,value.length));
            obj = document.getElementById(value.slice(1, value.length));
            return (obj);
        }
        if (value.charAt(0) === ".") {
            obj = document.getElementsByClassName(value.slice(1, value.length));
            return (obj);
        }
    }
}






window.onload=function(){

    $_("#header-menu-line-ul").onclick=function(){
        if(clicked){clicked=false;}else{clicked=true;}

        var p=$_(".header-menu-main-div")[0];
        if(clicked){
            this.style.backgroundColor="RGB(40,40,40)";
            p.style.visibility="visible";
            p.style.height="290px";
            p.style.backgroundColor="rgb(40,40,40)";
            $_(".header-menu-line-div")[0].classList.add("change1");
            $_(".header-menu-line-div")[1].classList.add("change3");
            $_(".header-menu-line-div")[2].classList.add("change2");
        }else{
            this.style.backgroundColor="black";
            p.style.visibility="hidden";
            p.style.height="0";
            p.style.backgroundColor="black";
            $_(".header-menu-line-div")[0].classList.remove("change1");
            $_(".header-menu-line-div")[1].classList.remove("change3");
            $_(".header-menu-line-div")[2].classList.remove("change2");
        }




    };






};



function form_text_onfoucs(obj){
    //onfocus="this.style.backgroundColor='rgb(1,165,250)'" onblur="this.style.backgroundColor='transparent'"
    obj.classList.remove("form_text_onblur");
    obj.classList.add("form_text_onfocus");
}
function form_text_onblur(obj){
    obj.classList.remove("form_text_onfocus");
    obj.classList.add("form_text_onblur");
}