Vue.component("navbar", {
    props: {
    },
    data: function () {
        return {
            search_style: {
                width: "20 rem",
            },
        }
    },
    computed: {
    },
    methods: {

    },
    template: `
                <nav class="navbar navbar-expand-lg navbar-light bg-danger">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    Movies
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">All movies</a>
                                    <a class="dropdown-item" href="#">On screen</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Coming soon</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Theatres</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" :style="search_style" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        <div class="btn-group">
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Right-aligned menu
                            </button>
                            <div class="dropdown-menu dropdown-menu-right">
                                <button class="dropdown-item" type="button">Action</button>
                                <button class="dropdown-item" type="button">Another action</button>
                                <button class="dropdown-item" type="button">Something else here</button>
                            </div>
                        </div>
                    </div>
                </nav>
                `,
})

let navbar = new Vue({
    el: "#navbar",
    data: {
    }
})