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
        toggleRegister: function () {
            this.popUpRegister = !this.popUpRegister;
            if(this.popUpRegister) {
                document.querySelector("body").classList.add("lockscroll");
            } else {
                document.querySelector("body").classList.remove("lockscroll");
            }
        },
    },
})