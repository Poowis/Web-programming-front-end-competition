let body = new Vue({
    el: '#body',
    data: {
        number: 0,
        movies: movies,
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
