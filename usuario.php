<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nac = $_POST['nac'];
    $number = $_POST['number'];
    $province = $_POST['province'];
    $localidad = $_POST['localidad'];
    $job = $_POST['job'];
    $education = $_POST['education'];
    $experiencie = $_POST['experiencie'];
}

if($nac===''||$number===''||$province===''||$localidad===''||$job===''||$education ===''||$experiencie ===''){
    echo json_encode('error');
}else{
    echo json_encode('correcto');
}


?>

