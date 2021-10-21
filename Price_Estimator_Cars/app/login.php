<?php
session_start();
?>

<!DOCTYPE html>
<html lang="ro">
<head>
	<meta charset=UTF-8>
	<meta name="viewport" content="width=device-width">
	<title>Autentificare / Înregistrare</title>
	<link rel="stylesheet" type="text/css" href="stilLogin2.css">
</head>
<body>
<div class="bg">
<div>
	<h1 style="text-align: center; margin-top: 85px;">AutoEPV</h1>
</div>
<div class="form-box">
	<div class="button-box">
		<div id="btn"></div>
		<button type="button" class="toogle-btn" onclick="login()">Autentificare</button>
		<button type="button" class="toogle-btn" onclick="register()">Înregistrare</button>
	</div>
	<form action="validare.php" method="post" id="login" class="input-group">
		<input type="text" name="user" class="input-field" placeholder="Nume utilizator" required>
		<input type="password" name="password" class="input-field" placeholder="Parolă" required>
		<br></br>
		<button type="submit" class="submit-btn">Autentificare</button>
	</form>
	<form action="inregistrare.php" method="post" id="register" class="input-group">
		<input type="text" name="user" class="input-field" placeholder="Nume utilizator" required>
		<input type="password" name="password" class="input-field" placeholder="Parolă" required>
		<input type="email" name="email" class="input-field" placeholder="E-mail" required>
		<br></br>
		<button type="submit" class="submit-btn">Înregistrare</button>
	</form>
</div>
</div>

<script type="text/javascript">
	var x = document.getElementById('login');
	var y = document.getElementById('register');
	var z = document.getElementById('btn');

	function register(){
		x.style.left = '-400px';
		y.style.left = '50px';
		z.style.left = '135px';
	}

	function login(){
		x.style.left = '50px';
		y.style.left = '450px';
		z.style.left = '0px';
	}
</script>

</body>
</html>