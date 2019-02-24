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
        "name": "01",
        "status": "available",
        "currentMovie": "",
        "maxSeatsInRow": 32,
        "rows": [
            {
                "name": "K",
                "seats": [
                    {
                        "name": null,
                        "status": "none",
                    },
                    {
                        "name": null,
                        "status": "none",
                    },
                    {
                        "name": null,
                        "status": "none",
                    },
                    {
                        "name": null,
                        "status": "none",
                    },
                    {
                        "name": "K01",
                        "status": "available",
                    },
                    {
                        "name": "K02",
                        "status": "notAvailable",
                    },
                    {
                        "name": "K03",
                        "status": "booked",
                    },
                    {
                        "name": "K04",
                        "status": "selected",
                    },
                    {
                        "name": "K05",
                        "status": "available",
                    },
                    {
                        "name": "K06",
                        "status": "notAvailable",
                    },
                    {
                        "name": "K07",
                        "status": "booked",
                    },
                    {
                        "name": "K08",
                        "status": "selected",
                    },
                    {
                        "name": "K09",
                        "status": "available",
                    },
                    {
                        "name": "K10",
                        "status": "notAvailable",
                    },
                    {
                        "name": "K11",
                        "status": "booked",
                    },
                    {
                        "name": "K12",
                        "status": "selected",
                    },
                    {
                        "name": "K13",
                        "status": "available",
                    },
                    {
                        "name": "K14",
                        "status": "notAvailable",
                    },
                    {
                        "name": "K15",
                        "status": "booked",
                    },
                    {
                        "name": "K16",
                        "status": "selected",
                    },
                    {
                        "name": "K17",
                        "status": "available",
                    },
                    {
                        "name": "K18",
                        "status": "notAvailable",
                    },
                    {
                        "name": "K19",
                        "status": "booked",
                    },
                    {
                        "name": "K20",
                        "status": "selected",
                    },
                    {
                        "name": "K21",
                        "status": "available",
                    },
                    {
                        "name": "K22",
                        "status": "notAvailable",
                    },
                    {
                        "name": "K23",
                        "status": "booked",
                    },
                    {
                        "name": "K24",
                        "status": "selected",
                    },
                    {
                        "name": null,
                        "status": "none",
                    },
                    {
                        "name": null,
                        "status": "none",
                    },
                    {
                        "name": null,
                        "status": "none",
                    },
                    {
                        "name": null,
                        "status": "none",
                    },
                ],
            },
            {
                "name": "J",
                "seats": [
                    {
                        "name": null,
                        "status": "none",
                    },
                    {
                        "name": null,
                        "status": "none",
                    },
                    {
                        "name": "J01",
                        "status": "available",
                    },
                    {
                        "name": "J02",
                        "status": "notAvailable",
                    },
                    {
                        "name": "J03",
                        "status": "booked",
                    },
                    {
                        "name": "J04",
                        "status": "selected",
                    },
                    {
                        "name": "J05",
                        "status": "available",
                    },
                    {
                        "name": "J06",
                        "status": "notAvailable",
                    },
                    {
                        "name": "J07",
                        "status": "booked",
                    },
                    {
                        "name": "J08",
                        "status": "selected",
                    },
                    {
                        "name": "J09",
                        "status": "available",
                    },
                    {
                        "name": "J10",
                        "status": "notAvailable",
                    },
                    {
                        "name": "J11",
                        "status": "booked",
                    },
                    {
                        "name": "J12",
                        "status": "selected",
                    },
                    {
                        "name": "J13",
                        "status": "available",
                    },
                    {
                        "name": "J14",
                        "status": "notAvailable",
                    },
                    {
                        "name": "J15",
                        "status": "booked",
                    },
                    {
                        "name": "J16",
                        "status": "selected",
                    },
                    {
                        "name": "J17",
                        "status": "available",
                    },
                    {
                        "name": "J18",
                        "status": "notAvailable",
                    },
                    {
                        "name": "J19",
                        "status": "booked",
                    },
                    {
                        "name": "J20",
                        "status": "selected",
                    },
                    {
                        "name": "J21",
                        "status": "available",
                    },
                    {
                        "name": "J22",
                        "status": "notAvailable",
                    },
                    {
                        "name": "J23",
                        "status": "booked",
                    },
                    {
                        "name": "J24",
                        "status": "selected",
                    },
                    {
                        "name": "J25",
                        "status": "available",
                    },
                    {
                        "name": "J26",
                        "status": "available",
                    },
                    {
                        "name": "J27",
                        "status": "available",
                    },
                    {
                        "name": "J28",
                        "status": "available",
                    },
                    {
                        "name": null,
                        "status": "none",
                    },
                    {
                        "name": null,
                        "status": "none",
                    },
                ],
            },
            {
                "name": "I",
                "seats": [
                    {
                        "name": "I00",
                        "status": "available",
                    },
                    {
                        "name": "I01",
                        "status": "available",
                    },
                    {
                        "name": "I02",
                        "status": "available",
                    },
                    {
                        "name": "I03",
                        "status": "available",
                    },
                    {
                        "name": "I04",
                        "status": "available",
                    },
                    {
                        "name": "I05",
                        "status": "available",
                    },
                    {
                        "name": "I06",
                        "status": "available",
                    },
                    {
                        "name": "I07",
                        "status": "available",
                    },
                    {
                        "name": "I08",
                        "status": "available",
                    },
                    {
                        "name": "I09",
                        "status": "available",
                    },
                    {
                        "name": "I10",
                        "status": "available",
                    },
                    {
                        "name": "I11",
                        "status": "available",
                    },
                    {
                        "name": "I12",
                        "status": "available",
                    },
                    {
                        "name": "I13",
                        "status": "available",
                    },
                    {
                        "name": "I14",
                        "status": "available",
                    },
                    {
                        "name": "I15",
                        "status": "available",
                    },
                    {
                        "name": "I16",
                        "status": "available",
                    },
                    {
                        "name": "I17",
                        "status": "available",
                    },
                    {
                        "name": "I18",
                        "status": "available",
                    },
                    {
                        "name": "I19",
                        "status": "available",
                    },
                    {
                        "name": "I20",
                        "status": "available",
                    },
                    {
                        "name": "I21",
                        "status": "available",
                    },
                    {
                        "name": "I22",
                        "status": "available",
                    },
                    {
                        "name": "I23",
                        "status": "available",
                    },
                    {
                        "name": "I24",
                        "status": "available",
                    },
                    {
                        "name": "I25",
                        "status": "available",
                    },
                    {
                        "name": "I26",
                        "status": "available",
                    },
                    {
                        "name": "I27",
                        "status": "available",
                    },
                    {
                        "name": "I28",
                        "status": "available",
                    },
                    {
                        "name": "I29",
                        "status": "available",
                    },
                    {
                        "name": "I30",
                        "status": "available",
                    },
                    {
                        "name": "I31",
                        "status": "available",
                    },
                ],
            },
        ],
    },
];