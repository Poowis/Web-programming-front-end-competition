let body = new Vue({
    el: '#body',
    data: {
        movie: movies[5],
        theater: theaters[0],
        location: "Mega Bangna",
        selectedSeats: [],
        paytype: "cash",
    },
    computed: {
        seatwidth: function () {
            return "width: " + document.querySelector("#seats").offsetWidth / this.theater.maxSeatsInRow + "px";
        },
        total: function () {
            let num = 0;
            for (let seat of this.selectedSeats) {
                num += seat.price;
            }
            return num;
        }
    },
    methods: {
        addSeat: function (seat) {
            if (this.selectedSeats.includes(seat)) {
                seat.status = "available";
                this.selectedSeats.splice(this.selectedSeats.indexOf(seat), 1)
            } else {
                if (seat.status == "available") {
                    seat.status = "selected";
                    this.selectedSeats.push(seat);
                }
            }

        }
    }

});
