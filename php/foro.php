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
        <form action="publicar_fotos" method="post">
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
    </section>
</main>
</html>