let navbar = new Vue({
    el: "#navbar",
    data: {
        loggedIn: true,
        search: false,
    },
    methods: {
        toggleSearch: function() {
            this.search = !this.search;
        },
    }
})