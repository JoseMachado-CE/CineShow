/*jshint esversion: 6 */

const apiKey = '9473d9c9';
const baseUrl = `https://www.omdbapi.com/?apikey=${apiKey}`;

$(document).ready(() => {
    $('#buttonGen').on('click', (e) => {
        e.preventDefault();
        let movieName = $('#searchText').val();
        getMovies(movieName);
    });
});

function getMovies(movieName) {
    $('.hide-bottom-cine').hide();
    fetch(`${baseUrl}&s=${movieName}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let movies = data.Search;
            if (data.Response == 'False') {
                displayError('Movie not found. Search for another movie, please. - CineShow');
            } else {
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
                               
                                    <a onclick="movieSelected('${movie.imdbID}')" class="btn butaoPurple" href="#">Movie Details <i class="fas fa-film"></i></a>
                                </div>
                        </div>
                    `;
                });
                $('#movies').html(output);
            }
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

    fetch(`${baseUrl}&i=+${movieId}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let movie = data;
            let output = `
                <div class="row">
                    <div class="col-sm-12 col-md col-lg-4">
                        <img src="${movie.Poster}" class=" poster-movie thumbnail">
                    </div>
                    <div class="col-sm-12 col-md col-lg-8">
                        <h2 class="poster-title">${movie.Title}</h2>
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
                        <h3 class="poster-overview">Movie Overview</h3>
                        ${movie.Plot}
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 img-poster-md">
                        <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn butaoCinema">View IMDB</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <a href="index.html" class="btn butaoCinema">Go Back To Search</a>
                    </div>
                </div>
            `;
            $('#movies').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}

/* Swal Tool */
function displayError(message) {
    Swal.fire({
        title: 'Error!',
        text: `${message}`,
        icon: 'error',
        confirmButtonText: 'Ok',
    });
}


