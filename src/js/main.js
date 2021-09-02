class UI {
    constructor() {
        this.map = this.initialMap();
    }

    initialMap() {
        const map = L.map('map').setView([18.984436, -99.257600], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([18.984436, -99.257600]).addTo(map)
            .bindPopup('¡HOLA!')
            .openPopup();

        return map
    }
}

const mapa = new UI();