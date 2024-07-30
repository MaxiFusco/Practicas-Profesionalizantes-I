<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
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
    $email = isset($_POST['mail']) ? trim($_POST['mail']) : '';

    if (empty($email)) {
        echo json_encode(['status' => 'error', 'message' => 'El correo electrónico es obligatorio.']);
        exit;
    }
    if ($stmt === false) {
        error_log('Error en la preparación de la consulta SQL: ' . $conn->error);
        echo json_encode(['status' => 'error', 'message' => 'Error en la preparación de la consulta SQL.']);
        exit;
    }
    

    $stmt = $conn->prepare('DELETE FROM usuarios WHERE mail = ?');
    if ($stmt === false) {
        echo json_encode(['status' => 'error', 'message' => 'Error en la preparación de la consulta SQL.']);
        exit;
    }

    $stmt->bind_param('s', $email);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo json_encode(['status' => 'success', 'message' => 'Usuario eliminado exitosamente.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'No se encontró el usuario o no se pudo eliminar.']);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(['status' => 'error', 'message' => 'Método de solicitud no permitido.']);
}
?>




