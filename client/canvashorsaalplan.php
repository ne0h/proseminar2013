<html>
<head>
<?php
/*
Hierbei handelt es sich um ein Beispiel für den sinnvollen Einsatz von "canvas". Es ist nur ein einfacher Plan, da er in der HTML5-Gruppe entstand. Die JavaScript Gruppe darf gerne einen besseren Plan machen.

Das entstand anhand des Buches "HTML5 - Webseiten innovativ und zukunftssicher" von Peter Kröner, S. 358 und S. 359
*/
	echo "<script>";
	echo "	function zeichne(){";
	echo "		var canvas = document.getElementById('horsaal');";
	echo "		if(canvas.getContext){";
	echo "			var context = canvas.getContext('2d');";
	echo "			context.fillStyle = 'rgb(255, 127, 0)';";
	echo "			context.fillRect(10, 10, 930, 600);";
	echo "			context.fillStyle = 'rgb(255, 255, 255)';";
	$platzi = 13;
	$platzj = 7;
	for ($i = 0; $i < 20; $i++) {
		for ($j = 0; $j < 10; $j++) {
			if ($i < 9 or $i > 10) {
				if ($i == $platzi && $j == $platzj) {
					echo "context.fillStyle = 'rgb(0, 255, 0)';";
				}
				echo "context.fillRect(".(80 + ($i * 40)).", ".(50 + ($j * 50)).", 30, 30);";
				if ($i == $platzi && $j == $platzj) {
					echo "context.fillStyle = 'rgb(255, 255, 255)';";
				}
			}	
		}
	}
	echo "			context.fillStyle = 'rgb(0,0,200)';";
	echo "			context.fillRect(20, 10, 50, 5);";
	echo "			context.fillRect(440, 10, 70, 5);";
	echo "			context.fillRect(880, 10, 50, 5);";
	echo "		}";
	echo "	}";
	echo "</script>";
?>
</head>
<body onload="zeichne()">
<canvas id="horsaal" width="1000" height="700">
Leider kein Plan darstellbar!
</canvas>
</body>
</html>
