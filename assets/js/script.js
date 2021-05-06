const base_omd = 'https://www.omdbapi.com/?apikey=9473d9c9';
const api_key = '9473d9c9';

$(document).ready(() => {
    $('#buttonGen').on('click', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});