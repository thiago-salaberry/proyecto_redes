<?php
    require 'sistema.php';
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
    <section>
        <h3>¿quiere insertar su logro?</h3>
        <form action="publicar_fotos" method="post" enctyper="multipart/form-data">
            <div>
                <label for="img">Selecione una imagen:</label>
                <input id='imagen' type="file" name='foto'>
            </div>
            <div>
                <label for="descripcion">Descripcion:</label>
                <input type="text" name='nombre' required>
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
                    echo '<div>';
                    echo '<h3>' . htmlspecialchars($row['nombre'] . ' ' . $row['apellido']) . '</h3>'; // Mostrar el nombre del usuario
                    echo '<p>' . htmlspecialchars($row['descripcion']) . '</p>'; // Mostrar la descripción
                    echo '<img src="' . htmlspecialchars($row['ruta_imagen']) . '" alt="Imagen" style="max-width: 300px; height: auto;"/>'; // Mostrar la imagen
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