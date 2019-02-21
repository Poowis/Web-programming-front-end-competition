let navbar = new Vue({
    el: "#navbar",
    data: {
        loggedIn: false,
        searching: false,
        search: "",
        popUpRegister: false,
    },
    methods: {
        toggleLogIn: function () {
            this.loggedIn = !this.loggedIn;
        },
        toggleSearch: function () {
            this.searching = !this.searching;
            if (!this.searching) {
                this.search = "";
            }
        },
    },
})