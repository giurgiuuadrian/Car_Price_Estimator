<?php 
session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<title>AutoEPV</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" type="text/css" href="stil.css">
	<script src="script.js"></script>
	<script src="https://kit.fontawesome.com/ca08d3edff.js" crossorigin="anonymous"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
</head>

<body onload="solicitareMarca()">
	<div class="header">
		<div class="log-reg"></div>
	</div>

	<h1 style="text-align: center; margin-right: 100px; margin-top: 40px;">AutoEPV</h1>
	<div class="calc-box">
		<h2 id="h2" style="text-align: center; margin-top: 50px;">Află valoarea estimativă a autovehiculului</h2>
		<form class="form">
			<table class="tabel">
				<tr>
					<td>
						<label for="marca" class="label">Marca</label>
						<select id="marca" class="select" name="marca" onchange="solicitareModel(this)" required>
							<option value="" hidden="true">Alege opțiunea</option>
						</select>
					</td>
					<td>
						<label for="model" class="label">Model</label>
						<select id="model" class="select" name="model" onchange="solicitareAn(this)" required></select>
					</td>
				</tr>
				<tr>
					<td>
						<label for="anfab" class="label">An de fabricație</label>
						<select id="anfab" class="select" name="anfab" onchange="solicitareTransmisie(this)" required></select>
					</td>
					<td>
						<label for="transmisie" class="label">Transmisie</label>
						<select id="transmisie" class="select" onchange="solicitareCombustibil(this)" required></select>
					</td>
				</tr>
				<tr>
					<td>
						<label for="combustibil" class="label">Combustibil</label>
						<select id="combustibil" class="select" onchange="solicitareKm(this)" required></select>
					</td>
					<td>
						<label for="nrkm" class="label">Număr KM</label>
						<select id="nrkm" class="select" required></select>
					</td>
				</tr>
			</table>
			<p id="pret"></p>
			<button type="button" class="submit-form" onclick='solicitarePret(nrkm)'>Află valoarea autovehiculului</button><br>
			<div style="text-align: center; margin-right: -210px; margin-top: 33px;"><p style="color: rgb(102, 102, 102);">Atenție! Intervalul de preț este estimativ, valoarea autoturismului depinde foarte mult de starea  și de nivelul de echipare (dotări) a mașinii!</p></div>
		</form>
	</div>
	<div class="listaVZ">
		<h2 style="margin: 40px 5px 35px 5px; font-size: 22px;">Aici poți vizualiza lista vehiculelor aflate la vânzare rapidă:</h2>
		<a href="listaveh.php"><button type="button" class="submit">Lista vehiculelor</button></a>
	</div>
	<div class="socialMedia">
		<h2 style="margin: 40px 5px 35px 5px; font-size: 21px;">Ți-a plăcut experiența pe site? Spune-ne părerea ta pe rețelele de socializare:</h2>
		<!-- <button type="button" class="submit">Vinde rapid autovehiculul!</button> -->
		<a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a>
		<a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
	</div>
</body>
</html>