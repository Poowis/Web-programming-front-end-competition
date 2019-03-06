//python seat generator
// def main(name, n):
//   print('''{
//   "name": "'''+name+'''",
//   "seats": [''');
//   for i in range(n):
//     print('''    {
//       "name": "%s%02d",
//       "type": "Normal",
//       "price": 150,
//       "status": "available",
//     },''' %(name, i), sep="");  
//   print("""  ],
// },""");




// seat status
//     - none
//     - available
//     - notAvailable
//     - booked
//     - selected


let theaters = [
    {
        name: "01",
        status: "available",
        currentMovie: "",
        maxSeatsInRow: 5,
        rows: [
            {
                name: "D",
                seats: [
                    {
                        name: "D1",
                        status: "available",
                        type: "normal",
                        price: 120,
                    },
                    {
                        name: "D2",
                        status: "booked",
                        type: "normal",
                        price: 120,
                    },
                    {
                        name: "D3",
                        status: "booked",
                        type: "normal",
                        price: 120,
                    },
                    {
                        name: "D4",
                        status: "available",
                        type: "normal",
                        price: 120,
                    },
                    {
                        name: "D5",
                        status: "available",
                        type: "normal",
                        price: 120,
                    },
                ],
            },
            {
                name: "C",
                seats: [
                    {
                        name: "C1",
                        status: "available",
                        type: "normal",
                        price: 120,
                    },
                    {
                        name: "C2",
                        status: "available",
                        type: "normal",
                        price: 120,
                    },
                    {
                        name: "C3",
                        status: "available",
                        type: "normal",
                        price: 120,
                    },
                    {
                        name: "C4",
                        status: "available",
                        type: "normal",
                        price: 120,
                    },
                    {
                        name: "C5",
                        status: "available",
                        type: "normal",
                        price: 120,
                    },
                ],
            },
            {
                name: "B",
                seats: [
                    {
                        name: "B1",
                        status: "available",
                        type: "normal",
                        price: 120,
                    },
                    {
                        name: "B2",
                        status: "available",
                        type: "normal",
                        price: 120,
                    },
                    {
                        name: "B3",
                        status: "available",
                        type: "normal",
                        price: 120,
                    },
                    {
                        name: "B4",
                        status: "available",
                        type: "normal",
                        price: 120,
                    },
                    {
                        name: "B5",
                        status: "available",
                        type: "normal",
                        price: 120,
                    },
                ],
            },
            {
                name: "A",
                seats: [
                    {
                        name: "A1",
                        status: "available",
                        type: "normal",
                        price: 120,
                    },
                    {
                        name: "A2",
                        status: "available",
                        type: "normal",
                        price: 120,
                    },
                    {
                        name: "A3",
                        status: "available",
                        type: "normal",
                        price: 120,
                    },
                    {
                        name: "A4",
                        status: "available",
                        type: "normal",
                        price: 120,
                    },
                    {
                        name: "A5",
                        status: "available",
                        type: "normal",
                        price: 120,
                    },
                ],
            },
            {
                name: "VP",
                seats: [
                    {
                        name: "VP1",
                        status: "available",
                        type: "normal",
                        price: 240,
                    },
                    {
                        name: "VP2",
                        status: "available",
                        type: "normal",
                        price: 240,
                    },
                    {
                        name: "VP3",
                        status: "available",
                        type: "normal",
                        price: 240,
                    },
                    {
                        name: "VP4",
                        status: "available",
                        type: "normal",
                        price: 240,
                    },
                    {
                        name: "VP5",
                        status: "available",
                        type: "normal",
                        price: 240,
                    },
                ],
            },
        ],
    },
];