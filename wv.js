function berechne_Bt() {
  var B = parseFloat(document.getElementById("B").value);
  var q = parseFloat(document.getElementById("q").value);
  var t = parseFloat(document.getElementById("t").value);

  var Bt = B * Math.pow(q, t);

  document.getElementById("Bt").value = Bt;
}
function berechne_BB() {
  var Btt = parseFloat(document.getElementById("Btt").value);
  var qq = parseFloat(document.getElementById("qq").value);
  var tt = parseFloat(document.getElementById("tt").value);

  var BB = Btt / Math.pow(qq, tt);

  document.getElementById("BB").value = BB;
}
function berechne_qqq() {
  var Bttt = parseFloat(document.getElementById("Bttt").value);
  var BBB = parseFloat(document.getElementById("BBB").value);
  var ttt = parseFloat(document.getElementById("ttt").value);

  var qqq = Math.pow(Bttt / BBB, 1 / ttt);

  document.getElementById("qqq").value = qqq;
}
function berechne_tttt() {
  var Btttt = parseFloat(document.getElementById("Btttt").value);
  var BBBB = parseFloat(document.getElementById("BBBB").value);
  var qqqq = parseFloat(document.getElementById("qqqq").value);
  var qqqqq = qqqq * 100;
  var tttt = Math.log10(Btttt / BBBB) / Math.log10(qqqqq / 100);

  document.getElementById("tttt").value = tttt;
}
window.onload = function() {
  document.getElementById("berechnen").onclick = berechne_Bt;
  document.getElementById("berechnenn").onclick = berechne_BB;
  document.getElementById("berechnennn").onclick = berechne_qqq;
  document.getElementById("berechnennnn").onclick = berechne_tttt;
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