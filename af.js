function berechne_Bt() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var d = parseFloat(document.getElementById("d").value);

  var c = ((a*d)/b);

  document.getElementById("c").value = c;
}
function berechne_BB() {
  var bb = parseFloat(document.getElementById("bb").value);
  var aa = parseFloat(document.getElementById("aa").value);
  var cc = parseFloat(document.getElementById("cc").value);

  var dd = ((bb*cc)/aa);

  document.getElementById("dd").value = dd;
}
function berechne_qqq() {
  var aaa = parseFloat(document.getElementById("aaa").value);
  var bbb = parseFloat(document.getElementById("bbb").value);
  var ddd = parseFloat(document.getElementById("ddd").value);

  var ccc = (ddd*((bbb)/(aaa+bbb)));

  document.getElementById("ccc").value = ccc;
}
function berechne_tttt() {
  var aaaa = parseFloat(document.getElementById("aaaa").value);
  var bbbb = parseFloat(document.getElementById("bbbb").value);
  var dddd = parseFloat(document.getElementById("dddd").value);
  
  var cccc = (dddd)*((aaaa)/(aaaa+bbbb));

  document.getElementById("cccc").value = cccc;
}

window.onload = function() {
  document.getElementById("berechnen").onclick = berechne_Bt;
  document.getElementById("berechnenn").onclick = berechne_BB;
  document.getElementById("berechnennn").onclick = berechne_qqq;
  document.getElementById("berechnennnn").onclick = berechne_tttt;
}
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

window.onscroll = function() {myFunction()};

var titl = document.getElementById("myTitl");
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    titl.classList.remove("opacityt");
  } else {
    header.classList.remove("sticky");
    titl.classList.add("opacityt");

  }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
