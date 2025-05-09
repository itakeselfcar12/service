// State selection and car listings functionality
function loadCars() {
    const state = document.getElementById('stateSelect').value;
    const carsContainer = document.getElementById('carsContainer');

    if (state) {
        const cars = getCarsByState(state);
        let carHTML = '';

        cars.forEach(car => {
            carHTML += `
                <div class="car-card">
                    <img src="${car.image}" alt="${car.name}">
                    <h3>${car.name}</h3>
                    <p>${car.description}</p>
                    <button onclick="bookCar('${car.name}')">Book</button>
                </div>
            `;
        });

        carsContainer.innerHTML = carHTML;
    }
}

function getCarsByState(state) {
    const cars = {
        california: [
            { name: 'Car 1', description: 'SUV', image: 'car1.jpg' },
            { name: 'Car 2', description: 'Sedan', image: 'car2.jpg' },
            { name: 'Car 3', description: 'Convertible', image: 'car3.jpg' },
            { name: 'Car 4', description: 'Luxury', image: 'car4.jpg' },
        ],
        texas: [
            { name: 'Car A', description: 'SUV', image: 'carA.jpg' },
            { name: 'Car B', description: 'Sedan', image: 'carB.jpg' },
            { name: 'Car C', description: 'Pickup', image: 'carC.jpg' },
            { name: 'Car D', description: 'Luxury', image: 'carD.jpg' },
        ]
    };
    
    return cars[state] || [];
}

function bookCar(carName) {
    alert(`Booking for ${carName}`);
    window.location.href = 'registration.html';
}
