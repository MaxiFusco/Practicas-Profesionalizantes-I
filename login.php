<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $mail = $_POST['mail'];
    $password = $_POST['password'];

}

if($mail===''||$password===''){
    echo json_encode('error');
}else{
    echo json_encode('correcto');
}


?>

