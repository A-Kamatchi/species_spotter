document.addEventListener('DOMContentLoaded', () => {
    const featuredSpecies = [
        { name: 'Tiger', description: 'A large carnivorous feline mammal native to Asia.', image: 'images/tiger.jpg' },
        { name: 'Elephant', description: 'A large herbivorous mammal with a trunk, native to Africa and Asia.', image: 'images/elephant.jpg' },
        { name: 'Panda', description: 'A bear native to south central China, known for its distinct black-and-white coloring.', image: 'images/panda.jpg' },
        { name: 'Snow Leopard', description: 'A large cat native to the mountain ranges of Central and South Asia.', image: 'images/snow-leopard.jpg' },
        { name: 'Gorilla', description: 'A herbivorous ape native to the forests of central Sub-Saharan Africa.', image: 'images/gorilla.jpg' }
    ];
  
    const speciesGrid = document.querySelector('.species-grid');
    featuredSpecies.forEach(species => {
        const speciesElement = document.createElement('div');
        speciesElement.className = 'species-item';
        speciesElement.innerHTML = `
            <img src="${species.image}" alt="${species.name}">
            <h3>${species.name}</h3>
            <p>${species.description}</p>
        `;
        speciesGrid.appendChild(speciesElement);
    });
});
