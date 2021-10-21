<?php

session_start();

$con = mysqli_connect('localhost', 'root', '');
mysqli_select_db($con, 'dblicenta');

$name = $_POST['user'];
$pass = $_POST['password'];

$s = "SELECT * FROM users WHERE name ='$name' && password ='$pass'";

$result = mysqli_query($con, $s);

$num = mysqli_num_rows($result);

if($num == 1) {
	$_SESSION['name'] = $name;
	header('location:paginaprin.php');
}
else{
	echo "<script type='text/javascript'>alert('Date greșite!');</script>";
	header('location:login.php');
}

?>