let body = new Vue({
    el: "#body",
    data: {
        movies: movies,
        selectedlocation: "Mega Bangna",
        selectedmovie: 0,
        selectedday: 0,
        locations:[
            "Mega Bangna",
            "Seacon Square",
            "Paradise Park",
        ],
        rounds: [
            {
                day: "27 Feb 2019",
                rounds: [
                    "13:00",
                    "16:00",
                    "19:00",
                    "22:00",
                ],
            },
            {
                day: "28 Feb 2019",
                rounds: [
                    "16:00",
                    "19:00",
                    "22:00",
                ],
            },
            {
                day: "1 Mar 2019",
                rounds: [
                    "13:00",
                    "16:00",
                    "19:00",
                    "22:00",
                ],
            },
            {
                day: "2 Mar 2019",
                rounds: [
                    "13:00",
                    "16:00",
                    "19:00",
                    "22:00",
                ],
            },
            {
                day: "3 Mar 2019",
                rounds: [
                    "13:00",
                    "16:00",
                    "19:00",
                    "22:00",
                ],
            },
            

        ],
    },
});
