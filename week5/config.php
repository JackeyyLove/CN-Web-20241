<?php
$servername = "172.17.0.3:3306";
$username = "root"; 
$password = "password"; 
$dbname = "sinhvien_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}
?>

