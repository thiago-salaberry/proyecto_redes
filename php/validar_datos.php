<?php
require 'sistema.php'; // Asegúrate de que aquí se establezca la conexión $conn con mysqli
session_start();
if (!empty($_POST['email']) && !empty($_POST['contraseña'])) {
    $email = $_POST['email'];
    $contraseña = $_POST['contraseña'];

    // Utiliza '?' como marcador de parámetro en mysqli
    $query = $conn->prepare('SELECT ID_usuario, email, contraseña FROM usuario WHERE email = ?');
    $query->bind_param('s', $email); // 's' indica que es un parámetro de tipo string
    $query->execute();
    $result = $query->get_result();
    $usuario = $result->fetch_assoc();
    
    if ($usuario && $contraseña == $usuario['contraseña']) {
        $_SESSION['ID_usuario'] = $usuario['ID_usuario'];
        header('Location: foro.php');
        exit();
    } else {
        $message = 'Usuario o contraseña incorrectos';
        echo $message; // Para mostrar el mensaje de error
    }
} else {
    $message = 'Por favor, complete todos los campos';
    echo $message; // Para mostrar el mensaje de error
}
?>