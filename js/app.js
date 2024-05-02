function mostrarImagen() {
    //Obtiene el elemento <select> con el id "imagenSeleccionada" del documento.
    let select = document.getElementById('imagenSeleccionada');
    //Obtiene el valor de la opción seleccionada en ese <select>.
    let selectedImage = select.options[select.selectedIndex].value;
    let container = document.getElementById('imagenMostrada');
    container.innerHTML = '<img src="' + selectedImage + '" alt="Imagen seleccionada">';
}

