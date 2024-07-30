<?php
 header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type"); 
header('Content-Type: application/json');


$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "phplogin";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die(json_encode(array("error" => "Connection failed: " . $conn->connect_error)));
}

$email = isset($_POST['email']) ? $_POST['email'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';
$name = isset($_POST['name']) ? $_POST['name'] : '';
$lastname = isset($_POST['lastname']) ? $_POST['lastname'] : '';
$edad = isset($_POST['edad']) ? $_POST['edad'] : '';
$actividad = isset($_POST['actividad']) ? $_POST['actividad'] : '';
$añosexp = isset($_POST['añosexp']) ? $_POST['añosexp'] : '';
$sueldo = isset($_POST['sueldo']) ? $_POST['sueldo'] : '';
$localidad = isset($_POST['localidad']) ? $_POST['localidad'] : '';


$sql = "INSERT INTO `usuarios` (mail, contraseña, nombre, apellido, edad, actividad, añosexp, sueldo, localidad) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssssss", $email, $password, $name, $lastname, $edad, $actividad, $añosexp, $sueldo, $localidad);

if ($stmt->execute()) {
    echo json_encode(array("status" => "success", "message" => "Registro exitoso para el usuario."));
} else {
    echo json_encode(array("error" => "Error: " . $stmt->error));
}

$stmt->close();
$conn->close();
?>


