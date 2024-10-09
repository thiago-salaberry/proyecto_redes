<?php
session_start();
require 'sistema.php';


if (!isset($_SESSION['ID_usuario'])) {
    header("Location:../index/registro_inicio.html"); // Redirigir a la página de inicio de sesión y registro
    exit();
}

// Consulta para obtener todas las imágenes
$sql_imagenes = "SELECT imagenes.descripcion, imagenes.ruta_imagen, usuario.nombre, usuario.apellido 
                 FROM imagenes 
                 JOIN usuario ON imagenes.id_usuario = usuario.ID_usuario"; // Asegúrate de que el nombre de la tabla y la columna ID sea correcta
$stmt_imagenes = $conn->prepare($sql_imagenes);
$stmt_imagenes->execute();
$result = $stmt_imagenes->get_result();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Foro de imagenes</title>
    <link rel="stylesheet" href="../css/foro.css">
</head>
<main>
    <h1>Foro de la wiki</h1>
    <button>volver al inicio</button>
    <section>
        
        <h3>¿quiere insertar su logro?</h3>
        <form action="subir_apartado.php" method="post" enctype="multipart/form-data">
            <div>
                <label for="img">Selecione una imagen:</label>
                <input id="imagen" type="file" name="imagen" required>
            </div>
            <div>
                <label for="descripcion">Descripcion:</label>
                <input id="descripcion" type="text" name="descripcion" required>
            </div>
            <div>
                <button type="submit" class="btn">subir</button>
            </div>
        </form>
    </section>
    <section>
        <h3>publicaciones</h3>
    <?php
    if ($result->num_rows > 0) {
        // Mostrar cada imagen
        while ($row = $result->fetch_assoc()) {
            echo '<div class="comment">';
            echo '<h4>' . htmlspecialchars($row['nombre'] . ' ' . $row['apellido']) . '</h4>'; // Mostrar el nombre del usuario
            echo '<img src="' . htmlspecialchars($row['ruta_imagen']) . '" alt="Imagen" />'; // Mostrar la imagen
            echo '<p>' . htmlspecialchars($row['descripcion']) . '</p>'; // Mostrar la descripción
            echo '</div><hr>';
        }
    } else {
        echo "<p>No hay imágenes disponibles.</p>";
    }
    $stmt_imagenes->close();
    $conn->close();
    ?>
    </section>
</main>
</html>