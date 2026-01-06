// FILTRO DE VEHÍCULOS
function filtrar(tipo) {
  const vehiculos = document.querySelectorAll('.vehiculo');

  vehiculos.forEach(vehiculo => {
    if (tipo === 'todos') {
      vehiculo.style.display = 'block';
    } else {
      if (vehiculo.classList.contains(tipo)) {
        vehiculo.style.display = 'block';
      } else {
        vehiculo.style.display = 'none';
      }
    }
  });
}

// EFECTO SUAVE AL CARGAR
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.benefit-card');

  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';

    setTimeout(() => {
      card.style.transition = 'all 0.5s ease';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
});
