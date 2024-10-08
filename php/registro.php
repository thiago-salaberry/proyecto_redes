<?php

require_once 'sistema.php';
session_start();
// Obtener datos del formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$contraseña = $_POST['contraseña'];

//Verificar el email
$sql_check_email = 'SELECT * FROM usuario WHERE email = ?';
$stmt = $conn->prepare($sql_check_email);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo "<script>alert('El email ya está registrado.'); window.history.back();</script>";
    // Si el email ya existe
} else {
    // Si el email no está registrado, insertar el nuevo usuario
    $sql_insert = "INSERT INTO `usuario`(`nombre`, `apellido`, `email`,`contraseña`)
                   VALUES (?, ?, ?, ?)";
    $stmt_insert = $conn->prepare($sql_insert);
    $stmt_insert->bind_param("ssss", $nombre, $apellido, $email, $contraseña);

    if ($stmt_insert->execute()) {
        // Obtener el ID del nuevo usuario
        $usuario['ID_usuario'] = $conn->insert_id; // Obtener el ID del último registro insertado
        $_SESSION['ID_usuario'] = $usuario['ID_usuario'];
        header('Location: foro.php');
    } else {
        echo "Error: ". $stmt_insert->error;
    }

    $stmt_insert->close();
}

$stmt->close();
$conn->close();

?>