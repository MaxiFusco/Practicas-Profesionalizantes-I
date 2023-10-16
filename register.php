<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Recibir datos del formulario
    $mail = $_POST['mail'];
    $contraseña = $_POST['password'];
    $nombre = $_POST['name'];
    $apellido = $_POST['lastname'];

}

if($mail===''||$password===''||$name===''||$lastname ===''){
    echo json_encode('error');
}else{
    echo json_encode('Registro exitoso para el usuario ');
}

$servername = "localhost"; 
$username = "root";  
$password = ""; 
$database = "phplogin"; 

$conn = new mysqli($servername, $username, $password, $database);

// Verificar si la conexión se ha establecido con éxito
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
} else{
    echo"conectado";
}

$sql = "INSERT INTO user (mail, contraseña, nombre, apellido) VALUES ('$mail', '$contraseña','$nombre','$apellido')";

if (mysqli_query($conn, $sql)) {
    echo "Registro insertado con éxito";
} else {
    echo "Error al insertar el registro: " . mysqli_error($conn);
}


// Preparar la consulta
$stmt = $conn->prepare($sql);

?>

