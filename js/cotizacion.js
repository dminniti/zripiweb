function obtenerCotizacion() {
    fetch('https://dolarapi.com/v1/dolares/oficial')
        .then(response => response.json())
        .then(data => {
            let precioPesosPromo = new Intl.NumberFormat("de-DE").format(document.getElementById('promo').value * parseInt(parseInt(data.compra) / 10) * 10);
            let precioPesosRegular = new Intl.NumberFormat("de-DE").format(document.getElementById('regular').value * parseInt(parseInt(data.compra) / 10) * 10);

            document.getElementById('precioPromo').innerHTML = `| ${precioPesosPromo} ARS`;
            document.getElementById('precioRegular').innerHTML = `| ${precioPesosRegular} ARS`;
        })
        .catch(error => {
            console.error('Error al obtener la cotización:', error);
        });
}

onload(obtenerCotizacion());