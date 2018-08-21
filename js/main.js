//设置每一个主要块的高度为一个屏幕高
var screenHeight = window.screen.availHeight;

var mainSect=document.getElementsByClassName('mainSection');

var i = 0;
console.log(mainSect);
for(i;i<mainSect.length;i++){
    mainSect[i].style.height=screenHeight+'px';
}


//header
var header = document.getElementsByTagName('header')[0];
var textLogo = header.getElementsByTagName('a')[0];
