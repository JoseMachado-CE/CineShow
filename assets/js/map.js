/*jshint esversion: 6 */

var L;
const map = L.map('map').setView([53.3498, -6.2603], 13);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=AAxwEAVTbe7dzG21ncPT', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);

var layerGroup = L.layerGroup().addTo(map);

const marker1 = L.marker([53.3513, -6.2605]);
const marker2 = L.marker([53.3503, -6.2677]);
const marker3 = L.marker([53.2889, -6.2220]);
const marker4 = L.marker([53.3903, -6.4050]);
const marker5 = L.marker([53.3910, -6.1928]);
const marker6 = L.marker([53.2934, -6.1397]);

$(document).ready(function () {
    $('#btn1').on('click', function (e) {
        e.preventDefault();
        layerGroup.clearLayers();
        map.closePopup();
        let marker = marker1.addTo(layerGroup);
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
                            <a type="submit" class="btn butaoPurple" href="cinemas.html">Back to cinemas</a>
                        </figure>
                    </div>
                    <div class="col-md-5">
                        <img class="img-fluid mx-auto img-locatio-cine low-cont d-none d-md-block" alt="" src="savoy.jpeg">
                    </div> 
            </div>
                `);
    });
});

$(document).ready(function () {
    $('#btn2').on('click', function (e) {
        e.preventDefault();
        layerGroup.clearLayers();
        map.closePopup();
        let marker = marker2.addTo(layerGroup);
        marker.bindPopup("Cineworld Cinemas").openPopup();
        $('#display-here').html(`
                     <div class="container">
                        <div class="row featurette">
                            <div class="col-md-7 low-cont">
                        <h2 class="featurette-heading">Cineworld</h2>
                        <figure>
                            <blockquote class="blockquote">
                                <p class="lead">Cineworld Dublin is the biggest cinema in Ireland, with 4 floors and 17 screens. It is located on Parnell Street, Dublin and is owned by the Cineworld cinema chain. It was opened by Virgin Cinemas in 1995 as Virgin Cinemas Dublin, the only cinema that was opened by Virgin Cinemas in Ireland
                                </p>
                            </blockquote>
                            <h5>Address</h5>
                            <p class="lead">The Parnell Centre, Parnell St, Rotunda, Dublin</p>
                            <h5>Website</h5>
                            <p class="lead">https://www.cineworld.ie/#/</p>
                            <a type="submit" class="btn butaoPurple" href="cinemas.html">Back to cinemas</a>
                        </figure>
                    </div>
                    <div class="col-md-5">
                        <img class="img-fluid mx-auto low-cont d-none d-md-block" alt="" src="cineworld.jpeg">
                    </div>
            </div>
                `);
    });
});

$(document).ready(function () {
    $('#btn3').on('click', function (e) {
        e.preventDefault();
        layerGroup.clearLayers();
        map.closePopup();
        let marker = marker3.addTo(layerGroup);
        marker.bindPopup("ODEON Stillorgan").openPopup();
        $('#display-here').html(`
                     <div class="container">
                        <div class="row featurette">
                            <div class="col-md-7 low-cont">
                        <h2 class="featurette-heading">ODEON Stillorgan</h2>
                        <figure>
                            <blockquote class="blockquote">
                                <p class="lead">ODEON Stillorgan
                                </p>
                            </blockquote>
                            <h5>Address</h5>
                            <p class="lead">Stillorgan Plaza, Lower Kilmacud Rd, Stillorgan, Dublin</p>
                            <h5>Website</h5>
                            <p class="lead">https://imccinemas.ie/</p>
                            <a type="submit" class="btn butaoPurple" href="cinemas.html">Back to cinemas</a>
                        </figure>
                    </div>
                    <div class="col-md-5">
                        <img class="img-fluid mx-auto img-locatio-cine low-cont d-none d-md-block" alt="" src="ostillorgan.jpeg">
                    </div>
                    
            </div>
                `);
    });
});

$(document).ready(function () {
    $('#btn4').on('click', function (e) {
        e.preventDefault();
        layerGroup.clearLayers();
        map.closePopup();
        let marker = marker4.addTo(layerGroup);
        marker.bindPopup("ODEON Blanchardstown").openPopup();
        $('#display-here').html(`
                     <div class="container">
                        <div class="row featurette">
                            <div class="col-md-7 low-cont">
                        <h2 class="featurette-heading">ODEON Blanchardstown</h2>
                        <figure>
                            <blockquote class="blockquote">
                                <p class="lead">ODEON Blanch
                                </p>
                            </blockquote>
                            <h5>Address</h5>
                            <p class="lead">Blanchardstown Shopping Centre, Blanchardstown Road South, Blanchardstown, Co. Dublin</p>
                            <h5>Website</h5>
                            <p class="lead">https://imccinemas.ie/</p>
                            <a type="submit" class="btn butaoPurple" href="cinemas.html">Back to cinemas</a>
                        </figure>
                    </div>
                    <div class="col-md-5">
                        <img class="img-fluid mx-auto img-locatio-cine low-cont d-none d-md-block" alt="" src="oblanchardstown.jpeg">
                    </div>
                    
            </div>
                `);
    });
});

$(document).ready(function () {
    $('#btn5').on('click', function (e) {
        e.preventDefault();
        layerGroup.clearLayers();
        map.closePopup();
        let marker = marker5.addTo(layerGroup);
        marker.bindPopup("ODEON Coolock").openPopup();
        $('#display-here').html(`
                     <div class="container">
                        <div class="row featurette">
                            <div class="col-md-7 low-cont">
                        <h2 class="featurette-heading">ODEON Coolock</h2>
                        <figure>
                            <blockquote class="blockquote">
                                <p class="lead">ODEON Coolock
                                </p>
                            </blockquote>
                            <h5>Address</h5>
                            <p class="lead">84 Malahide Rd, Donaghmede, Coolock, Co. Dublin</p>
                            <h5>Website</h5>
                            <p class="lead">https://imccinemas.ie/</p>
                            <a type="submit" class="btn butaoPurple" href="cinemas.html">Back to cinemas</a>
                        </figure>
                    </div>
                    <div class="col-md-5">
                        <img class="img-fluid mx-auto img-locatio-cine low-cont d-none d-md-block" alt="" src="ocoolock.jpeg">
                    </div>
                    
            </div>
                `);
    });
});

$(document).ready(function () {
    $('#btn6').on('click', function (e) {
        e.preventDefault();
        layerGroup.clearLayers();
        map.closePopup();
        let marker = marker6.addTo(layerGroup);
        marker.bindPopup("IFM Dun Laoghaire").openPopup();
        $('#display-here').html(`
                     <div class="container">
                        <div class="row featurette">
                            <div class="col-md-7 low-cont">
                        <h2 class="featurette-heading">IFM Cinemas Dun Laoghaire</h2>
                        <figure>
                            <blockquote class="blockquote">
                                <p class="lead">IMC Dun Laoghaire Cinemas
                                </p>
                            </blockquote>
                            <h5>Address</h5>
                            <p class="lead">Bloomfield Shopping Centre, George's Street Lower, Dún Laoghaire, Co. Dublin</p>
                            <h5>Website</h5>
                            <p class="lead">https://imccinemas.ie/</p>
                            <a type="submit" class="btn butaoPurple" href="cinemas.html">Back to cinemas</a>
                        </figure>
                    </div>
                    <div class="col-md-5">
                        <img class="img-fluid mx-auto img-locatio-cine low-cont d-none d-md-block" alt="" src="dl.jpeg">
                    </div>
                    
            </div>
                `);
    });
});