document.getElementById('form-actividades').addEventListener('submit', function(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const imagenURL = document.getElementById('imagen-url').value;

    if (titulo && descripcion && imagenURL) {
        const contenedor = document.getElementById('contenedor-actividades');
        
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('actividad');

        const imagen = document.createElement('img');
        imagen.src = imagenURL;

        const tituloElemento = document.createElement('h3');
        tituloElemento.textContent = titulo;

        const descripcionElemento = document.createElement('p');
        descripcionElemento.textContent = descripcion;

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(tituloElemento);
        tarjeta.appendChild(descripcionElemento);

        contenedor.appendChild(tarjeta);

        // Limpiar campos del formulario
        document.getElementById('titulo').value = '';
        document.getElementById('descripcion').value = '';
        document.getElementById('imagen-url').value = '';
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
