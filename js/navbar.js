let navbar = new Vue({
    el: "#navbar",
    data: {
        loggedIn: false,
        searching: false,
        search: "",
        popUpRegister: false,
        regemail: "",
        regpassword: "",
        regconfirmpassword: "",
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
            if (this.popUpRegister) {
                document.querySelector("body").classList.add("lockscroll");
            } else {
                document.querySelector("body").classList.remove("lockscroll");
            }
        },
        validate: function () {
            if (this.regemail == "") {
                alert("Please insert Email");
            } else if (this.regpassword == "" || this.regpassword == "") {
                alert("Please insert Password");
            } else if (this.regpassword != this.regconfirmpassword) {
                alert("Password missmatched");
            } else {
                this.toggleRegister();
                this.toggleLogIn();
            }

        }
    },
})