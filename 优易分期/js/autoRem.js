$(window).resize(function(){
    setTimeout(function(){
        setRem();
    },100)
})

setRem();
function setRem(){
    var iWidth = document.documentElement.clientWidth;
    var section=document.querySelector('section');
    if(isPC()){
        iWidth=600;
        section.style.width=600+'px';
        section.style.margin="0 auto";
    }else{
        section.style.width='auto';
        section.style.margin="0";
    }
    var iFontSize = iWidth / 7.5; /*目前用得多的是除以16*/
    console.log("当前设备1rem大小为:" + iFontSize + "px");
    document.getElementsByTagName("html")[0].style.fontSize = iFontSize + "px";
}

function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false;
            break; }
    }
    return flag;
}