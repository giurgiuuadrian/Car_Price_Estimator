<?php

session_start();
header('location:login.php');

$con = mysqli_connect('localhost', 'root', '');
mysqli_select_db($con, 'dblicenta');

$name = $_POST['user'];
$pass = $_POST['password'];
$mail = $_POST['email'];

$s = "SELECT * FROM users WHERE name ='$name'";

$result = mysqli_query($con, $s);

$num = mysqli_num_rows($result);

if($num == 1) {
	echo "Numele de utilizator există deja!";
}
else{
	$reg= "INSERT INTO users(name, password, mail) VALUES ('$name', '$pass', '$mail')";
	mysqli_query($con, $reg);
	echo "Înregistrarea a avut loc cu succes";
}

?>