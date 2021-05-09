var map = L.map('map').setView([53.3498, -6.2603], 13);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=AAxwEAVTbe7dzG21ncPT', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);

var layerGroup = L.layerGroup().addTo(map);

var marker0 = L.marker([53.3513, -6.2605])
var marker1 = L.marker([53.3503, -6.2677])
var marker2 = L.marker([53.2889, -6.2220])
var marker3 = L.marker([53.2934, -6.1397])