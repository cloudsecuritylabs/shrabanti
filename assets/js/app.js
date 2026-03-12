// Load Featured Updates
fetch('featured.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('featured-container');

        data.updates.forEach(update => {
            const div = document.createElement('div');
            div.className = 'featured-item';
            div.innerHTML = `
                <h3>${update.title}</h3>
                <p>${update.description}</p>
                <small>${update.date}</small>
            `;
            container.appendChild(div);
        });
    });
