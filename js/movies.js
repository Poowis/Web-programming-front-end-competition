//All Movie Imdb ids
let imdb_ids = ["tt3513498", "tt3896198", "tt4139588", "tt6823368", "tt1477834", "tt0437086", "tt1727824", "tt4154796"];

//Fetch Movies
let json = [];
imdb_ids.forEach(function (id) {
    fetch("http://www.omdbapi.com/?apikey=44453fd5&i=" + id).then(function (response) {
        return response.json();
    }).then(function (myJson) {
        console.log(myJson);
        json.push(myJson);
    });
});

let body = new Vue({
    el: '#body',
    data: {
        number: 0,
        movies: json,
        genre: "",
        categories: [
            "Action",
            "Adventure",
            "Animation",
            "Biography",
            "Crime",
            "Comedy",
            "Drama",
            "History",
            "Horror",
            "Mystery",
            "Sci-Fi",
            "Romance",
        ],
    },
    computed: {
        search: function () {
            return navbar.search.toLowerCase();
        },
    },
    methods: {
        selectGenre: function (selectedGenre) {
            this.genre = selectedGenre;
        }
    }
})

Vue.component("movie", {
    props: {
        movie: {
            type: Object,
            required: true,
        }
    },
    data: function () {
        return {
        }
    },
    computed: {
    },
    template: `<div>
                    <div v-for="movie in this.movies" :movie="movie" :key="movie.imdbID">{{movie.Title}}</div>
                </div>`,
})
