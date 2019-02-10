//All Movie Imdb ids
let imdb_ids = ["tt3513498", "tt3896198", "tt4139588", "tt6823368", "tt1477834",];

//Fetch Movies
let json = [];
imdb_ids.forEach(function (id) {
    fetch("http://www.omdbapi.com/?apikey=44453fd5&i=" + id).then(function (response) {
        return response.json();
    }).then(function (myJson) {
        json.push(myJson);
    });
});

let body = new Vue({
    el: '#body',
    data: {
        movies: json,
    }
})

Vue.component("movies", {
    props: {
    },
    data: function () {
        return {
            movies: json,
        }
    },
    computed: {
    },
    template: `<div>
                    <div v-for="movie in this.movies" :movie="movie" :key="movie.imdbID">{{movie.Title}}</div>
                </div>`,
})

let movies = new Vue({
    el: "#movies",
    data: {
        movies: json,
    }
})