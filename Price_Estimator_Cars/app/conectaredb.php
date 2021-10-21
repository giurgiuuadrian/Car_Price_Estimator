<?php
$hostname = 'localhost';
$username = 'root';
$password = '';
$db = 'dblicenta';
$mysqli = new mysqli($hostname, $username, $password, $db);

if(!mysqli_connect_errno())
{
	echo 'Conectat la baza de date: '. $db;
	echo "<br>";
}

else
{
	echo 'Conectarea nu s-a putut efectua!';
	exit();
}

?>