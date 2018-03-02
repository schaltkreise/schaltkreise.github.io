function berechne_c () {
				var a = parseInt(document.getElementById("a").value);
				var b = parseInt(document.getElementById("b").value);
				
				var c = Math.sqrt((Math.pow(a, 2)+Math.pow(b, 2)));
				
				document.getElementById("c").value = c;
			}
function berechnenn_bbb () {
				var aaa = parseInt(document.getElementById("aaa").value);
				var ccc = parseInt(document.getElementById("ccc").value);
				
				var bbb = Math.sqrt((Math.pow(ccc, 2)-Math.pow(aaa, 2)));
				
				document.getElementById("bbb").value = bbb;
			}


function berechnen_aa () {
				var cc = parseInt(document.getElementById("cc").value);
				var bb = parseInt(document.getElementById("bb").value);
				
				var aa = Math.sqrt((Math.pow(cc, 2)-Math.pow(bb, 2)));
				
				document.getElementById("aa").value = aa;
			}

			window.onload = function () {
				document.getElementById("berechnenn").onclick = berechnen_aa;
				document.getElementById("berechnen").onclick = berechne_c;
				document.getElementById("berechnennn").onclick = berechnenn_bbb;
			};