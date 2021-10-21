<?php
session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<title>Vehicule vânzare rapidă</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" type="text/css" href="stil1.css">
	<script src="script.js"></script>
	<script src="https://kit.fontawesome.com/ca08d3edff.js" crossorigin="anonymous"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
</head>
<body onload="listaVR()" style="padding: 10px 10px 10px 10px;">

	<div class="header">
		<div class="log-reg">
			<a href="paginaprin.php"><button type="button" class="home-btn"><i class="fas fa-home"></i></button></a>
		</div>
	</div><br>
	<div style="width: 100%; margin: 0 auto;"><h2 >Lista vehiculelor aflate la vânzare rapidă</h2></div>
	<div id="listaVR"></div>
</body>
</html>