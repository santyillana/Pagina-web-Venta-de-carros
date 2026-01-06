function filtrar(tipo) {
  const vehiculos = document.querySelectorAll('.vehiculo');

  vehiculos.forEach(v => {
    if (tipo === 'todos' || v.dataset.tipo === tipo) {
      v.style.display = 'block';
    } else {
      v.style.display = 'none';
    }
  });
}
