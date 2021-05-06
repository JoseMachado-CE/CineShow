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
          <div class="col-md-3">
            <div class="text-center well">
              <img src="${movie.Poster} m-0"  />
              <h5 class="title-movie-h5">${movie.Title}</h5>
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