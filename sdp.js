function berechne_c() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);

  var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  document.getElementById("c").value = c;
}
function berechnenn_bbb() {
  var aaa = parseFloat(document.getElementById("aaa").value);
  var ccc = parseFloat(document.getElementById("ccc").value);

  var bbb = Math.sqrt(Math.pow(ccc, 2) - Math.pow(aaa, 2));

  document.getElementById("bbb").value = bbb;
}

function berechnen_aa() {
  var cc = parseFloat(document.getElementById("cc").value);
  var bb = parseFloat(document.getElementById("bb").value);

  var aa = Math.sqrt(Math.pow(cc, 2) - Math.pow(bb, 2));

  document.getElementById("aa").value = aa;
}

window.onload = function() {
  document.getElementById("berechnenn").onclick = berechnen_aa;
  document.getElementById("berechnen").onclick = berechne_c;
  document.getElementById("berechnennn").onclick = berechnenn_bbb;
};
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
