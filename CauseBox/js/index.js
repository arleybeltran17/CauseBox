let currentIndex = 0;
// Esperar a que la página se cargue por completo
window.addEventListener('load', function() {
    // Esperar un momento para simular la carga
    setTimeout(function() {
        // Obtener el elemento de la capa de carga
        const loadingScreen = document.getElementById('loading-screen');
        
        // Ocultar la capa de carga con una transición
        loadingScreen.classList.add('hidden');
    }, 1000); // Puedes ajustar el tiempo de espera según sea necesario
});



function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

function prevSlide() {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
}


// Datos de ejemplo para la gráfica
const datos = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [{
        label: 'Donaciones',
        data: [1200, 1500, 1800, 1100, 600 ],
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Opciones para la gráfica
const opciones = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'top'
        }
    },
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Crear la gráfica
const ctx = document.getElementById('miGrafico').getContext('2d');
const miGrafico = new Chart(ctx, {
    type: 'bar',
    data: datos,
    options: opciones
});
