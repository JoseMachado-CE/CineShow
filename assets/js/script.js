/*jshint esversion: 6 */

const api_key = '9473d9c9';
const base_omd = `https://www.omdbapi.com/?apikey=${api_key}`;

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

            if (response.data.Error == 'Movie not found!') {
                Swal.fire({
                    title: 'Error!',
                    text: 'Movie not found. Search for another movie, please. - CineShow',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
                console.log('This seach did not get any movie.');

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
                                    <a onclick="movieSelected('${movie.imdbID}')" class="btn butao2" href="#">Movie Details <i class="fas fa-film"></i></a>
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
                    <div class="col-sm-12 img-poster-md">
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
}