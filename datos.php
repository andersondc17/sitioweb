<?php 
$destinatario = "anderson_dc17@hotmail.com"; 
$tema = "Mensaje de la web"; 
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$correo = $_POST["correo"];
$telefono = $_POST["telefono"];
$asunto = $_POST["asunto"];

$cuerpo = 'Nombre Completo: '. $nombre. ' '.$apellido."\r\n"; 
$cuerpo .= 'Correo: '. $correo."\r\n"; 
$cuerpo .= 'Telefono: '. $telefono."\r\n"; 
$cuerpo .= 'Asunto: '. $asunto; 

mail($destinatario,$tema,$cuerpo); 
header("Location:index.html");
?>