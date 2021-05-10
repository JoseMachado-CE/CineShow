const base_omd = 'https://www.omdbapi.com/?apikey=9473d9c9';
const api_key = '9473d9c9';
$(document).ready(() => {
    $('#buttonGen').on('click', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText) {
    $('.hide-bottom-cine').hide();
    axios.get(base_omd + '&s=' + searchText)
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            let output = '';
            $.each(movies, (index, movie) => {
                output += `
          <div class="col-md-4 col-lg-3 box-search-long">
                <div class="content-box-search">
                    <div class="box-movies-search">
                        <img src="${movie.Poster}" alt="" />
                    </div>
                    <div class="title-movie-search"
                        <h5>${movie.Title}</h5>
                    </div>
                    <a onclick="movieSelected('${movie.imdbID}')" class="btn butao2" href="#">Movie Details</a>
                </div>
          </div>
          
        `;
            });
            $('#movies').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}

function movieSelected(id) {
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
}

function getMovie() {


    let movieId = sessionStorage.getItem('movieId');

    axios.get(base_omd + '&i=' + movieId)
        .then((response) => {
            console.log(response);
            let movie = response.data;

            let output = `
                <div class="row">
                    <div class="col-sm-12 col-md col-lg-4">
                        <img src="${movie.Poster}" class="thumbnail">
                    </div>
                    <div class="col-sm-12 col-md col-lg-8">
                        <h2>${movie.Title}</h2>
                        <ul class="list-group">
                        <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
                        <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
                        <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
                        <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
                        <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
                        <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
                        <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
                        </ul>
                    </div>
                </div>
                <div class="row movie-overview">
                    <div class="col">
                        <h3>Movie Overview</h3>
                        ${movie.Plot}
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn butao3">View IMDB</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <a href="index.html" class="btn butao3">Go Back To Search</a>
                    </div>
                </div>
            `;
            $('#movies').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
};

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
                            <a type="submit" class="btn butao2" href="cinemas.html">Back to cinemas</a>
                        </figure>
                    </div>
                    <div class="col-md-5">
                        <img class="img-fluid mx-auto img-locatio-cine low-cont d-none d-md-block" alt="" src="savoy.jpg">
                    </div>
                    
            </div>
                `);
    })
});

$(document).ready(function () {
    $('#btn2').on('click', function (e) {
        e.preventDefault();
        layerGroup.clearLayers();
        map.closePopup();
        marker = marker1.addTo(layerGroup);
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
                            <a type="submit" class="btn butao2" href="cinemas.html">Back to cinemas</a>
                        </figure>
                    </div>
                    <div class="col-md-5">
                        <img class="img-fluid mx-auto low-cont d-none d-md-block" alt="" src="cine.jpg">
                    </div>
            </div>
                `);
    })
})

$(document).ready(function () {
    $('#btn3').on('click', function (e) {
        e.preventDefault();
        layerGroup.clearLayers();
        map.closePopup();
        marker = marker2.addTo(layerGroup);
        marker.bindPopup("Odeon Cinemas - Stillorgan").openPopup();
        $('#display-here').html(`
                    <div class="container">
                        <div class="row featurette">
                            <div class="col-md-7 low-cont">
                                <h2 class="featurette-heading">Odeon</h2>
                            
                        <figure>
                            <blockquote class="blockquote">
                                <p class="lead">Odeon Cinemas
                                </p>
                            </blockquote>
                            <h5>Address</h5>
                            <p class="lead">The Parnell Centre, Parnell St, Rotunda, Dublin</p>
                            <h5>Website</h5>
                            <p class="lead">https://www.cineworld.ie/#/</p>
                            <a type="submit" class="btn butao2" href="cinemas.html">Back to cinemas</a>
                        </figure>
                    </div>
                    <div class="col-md-5 low-cont">
                        <img class="img-fluid mx-auto img-locatio-cine d-none d-md-block" alt="" src="OS.jpeg">
                    </div>
            </div>
                `);
    })
})

$(document).ready(function () {
    $('#btn4').on('click', function (e) {
        e.preventDefault();
        layerGroup.clearLayers();
        map.closePopup();
        marker = marker3.addTo(layerGroup);
        marker.bindPopup("IMC Dun Laoghaire Cinemas").openPopup();
        $('#display-here').html(`
                    <div class="container">
                        <div class="row featurette low-cont">
                            <div class="col-md-7">
                                <h2 class="featurette-heading">IMC Dun Laoghaire Cinemas</h2>
                            </div>
                        <div class="row">
                            <figure>
                                <blockquote class="blockquote">
                                    <p class="lead">IMC Dun Laoghaire Cinemas
                                    </p>
                                </blockquote>
                                <h5>Address</h5>
                                <p class="lead">Bloomfield Shopping Centre, George's Street Lower, Dún Laoghaire, Co. Dublin</p>
                                <h5>Website</h5>
                                <p class="lead">https://imccinemas.ie/</p>
                                <a type="submit" class="btn butao2" href="cinemas.html">Back to cinemas</a>
                            </figure>
                        </div>
                        <div class="row">
                            <div class="col-12 low-cont">
                                <img class="img-fluid mx-auto img-locatio-cine d-none d-md-block" alt="" src="DL.jpg">
                            </div>
                        </div>
                    
                    
                    </div>
                `);
    })
})