<?php 
$destinatario = "anderson_dc17@hotmail.com"; 
$asunto = "Mensaje de la web"; 
$correo = $_POST["correo"];
$cuerpo = 'El siguiente correo es: '. $correo; 


mail($destinatario,$asunto,$cuerpo); 
header("Location:index.html");
?>