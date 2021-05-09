var map = L.map('map').setView([53.3498, -6.2603], 13);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=AAxwEAVTbe7dzG21ncPT', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);

var layerGroup = L.layerGroup().addTo(map);

var marker0 = L.marker([53.3513, -6.2605])
var marker1 = L.marker([53.3503, -6.2677])
var marker2 = L.marker([53.2889, -6.2220])
var marker3 = L.marker([53.2934, -6.1397])

$(document).ready(function () {
    $('#btn1').on('click', function (e) {
        e.preventDefault();
        layerGroup.clearLayers();
        map.closePopup();
        marker = marker0.addTo(layerGroup);
        marker.bindPopup("Savoy Cinema").openPopup();
        $('#display-here').html(`
                     <div class="container">
                        <div class="row featurette">
                            <div class="col-md-7 low-cont">
                        <h2 class="featurette-heading">Savoy Cinemas</h2>
                        <figure>
                            <blockquote class="blockquote">
                                <p class="lead">The Savoy Cinema is the oldest operational cinema in Dublin, and it is the preferred cinema in Ireland for film premières.
                                </p>
                            </blockquote>
                            <h5>Address</h5>
                            <p class="lead">17 O'Connell Street Upper, North City, Dublin 1</p>
                            <h5>Website</h5>
                            <p class="lead">https://imccinemas.ie/</p>
                            <a type="submit" class="btn butao2" href="location.html">Back to cinemas</a>
                        </figure>
                    </div>
                    <div class="col-md-5">
                        <img class="img-fluid mx-auto img-locatio-cine low-cont d-none d-md-block" alt="" src="savoy.jpg">
                    </div>
                    
            </div>
                `);
    })
});