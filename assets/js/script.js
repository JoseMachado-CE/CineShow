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
                if (movie.Title.length <= 19) {
                    output += `
                <div class="row col-md-4 text-center">
                    <div class="col">
                        <div class="card shadow-sm">
                            <div class="card-header">
                                <a onclick="movieSelected('${movie.imdbID}')" class="btn butao2" href="#">Movie Details</a>
                            </div>
                            <div class="card-body">
                                <p class="card-title title-movie-p">${movie.Title}</p>
                                <div><br></div>
                            </div>
                            
                            <img class="img-small" src="${movie.Poster} alt="" />
                        </div>
                     </div>
                </div>    
             `;
                } else {
                    output += `
               <div class="row col-md-4 text-center box">
                    <div class="col-1">
                        <div class="card ">
                            <div class="card-header">
                                <a onclick="movieSelected('${movie.imdbID}')" class="btn butao2" href="#">Movie Details</a>
                            </div>
                            <div class="card-bodys">
                                <p class="card-title title-movie-h5">${movie.Title}</p>
                            </div>
                            
                            <img src="${movie.Poster} alt="" />
                        </div>
                     </div>
                </div>      
             `;
                }

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
          <div class="col-md-4">
            <img src="${movie.Poster}" class="thumbnail img-details">
          </div>
          <div class="col-md-8">
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
        <div class="row">
          <div class="well-2">
            <h3>Movie Overview</h3>
            ${movie.Plot}
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn butao">View IMDB</a>
            <a href="index.html" class="btn butao">Go Back To Search</a>
          </div>
        </div>
        
      `;

            $('#movies').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}