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

