<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');


$host = 'localhost';
$db = 'phplogin'; 
$user = 'root'; 
$pass = ''; 

$conn = new mysqli($host, $user, $pass, $db);


if ($conn->connect_error) {
    die(json_encode(['status' => 'error', 'message' => 'Conexión fallida: ' . $conn->connect_error]));
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $mail = isset($_POST['mail']) ? trim($_POST['mail']) : '';
    $password = isset($_POST['contraseña']) ? trim($_POST['contraseña']) : '';




    
    $stmt = $conn->prepare('SELECT contraseña FROM usuarios WHERE mail = ?');
    if ($stmt === false) {
        echo json_encode(['status' => 'error', 'message' => 'Error en la consulta SQL']);
        exit;
    }

    $stmt->bind_param('s', $mail);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 0) {
        echo json_encode(['status' => 'error', 'message' => 'Credenciales incorrectas']);
        $stmt->close();
        $conn->close();
        exit;
    }


    $stmt->close();
    $conn->close();
} else {
    echo json_encode(['status' => 'error', 'message' => 'Método de solicitud no permitido']);
}
?>





