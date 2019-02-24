//All Movie Imdb ids
let imdb_ids = ["tt3513498", "tt3896198", "tt4139588", "tt6823368", "tt1477834", "tt0437086", "tt1727824", "tt4154796"];

//Fetch Movies
// let json = [];
imdb_ids.forEach(function (id) {
    fetch("http://www.omdbapi.com/?apikey=44453fd5&i=" + id + "&plot=full").then(function (response) {
        return response.json();
    }).then(function (myJson) {
        console.log(JSON.stringify(myJson));
        // json.push();
    });
});

let movies = [
    {
        "Title": "The Lego Movie 2: The Second Part",
        "Year": "2019",
        "Rated": "PG",
        "Released": "08 Feb 2019",
        "Runtime": "107 min",
        "Genre": "Animation, Action, Adventure, Comedy, Family, Fantasy, Musical",
        "Director": "Mike Mitchell",
        "Writer": "Phil Lord (screenplay by), Christopher Miller (screenplay by), Phil Lord (story by), Christopher Miller (story by), Matthew Fogel (story by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by), Bob Kane (Batman created by), Bill Finger (Batman created by), William Moulton Marston (Wonder Woman created by)",
        "Actors": "Chris Pratt, Elizabeth Banks, Will Arnett, Tiffany Haddish",
        "Plot": "It's been five years since everything was awesome and the citizens are facing a huge new threat: Lego Duplo invaders from outer space, wrecking everything faster than they can rebuild.",
        "Language": "English",
        "Country": "Denmark, Norway, Australia, USA",
        "Awards": "N/A",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTkyOTkwNDc1N15BMl5BanBnXkFtZTgwNzkyMzk3NjM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "85%"
            }, {
                "Source": "Metacritic",
                "Value": "65/100"
            }
        ],
        "Metascore": "65",
        "imdbRating": "7.1",
        "imdbVotes": "10,410",
        "imdbID": "tt3513498",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "Production": "Warner Bros. Pictures",
        "Website": "http://TheLEGOMovie.com",
        "Response": "True"
    }, {
        "Title": "Guardians of the Galaxy Vol. 2",
        "Year": "2017",
        "Rated": "PG-13",
        "Released": "05 May 2017",
        "Runtime": "136 min",
        "Genre": "Action, Adventure, Comedy, Sci-Fi",
        "Director": "James Gunn",
        "Writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
        "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
        "Plot": "After saving Xandar from Ronan's wrath, the Guardians are now recognized as heroes. Now the team must help their leader Star Lord (Chris Pratt) uncover the truth behind his true heritage. Along the way, old foes turn to allies and betrayal is blooming. And the Guardians find that they are up against a devastating new menace who is out to rule the galaxy.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Nominated for 1 Oscar. Another 12 wins & 42 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.7/10"
            }, {
                "Source": "Rotten Tomatoes",
                "Value": "84%"
            }, {
                "Source": "Metacritic",
                "Value": "67/100"
            }
        ],
        "Metascore": "67",
        "imdbRating": "7.7",
        "imdbVotes": "441,372",
        "imdbID": "tt3896198",
        "Type": "movie",
        "DVD": "22 Aug 2017",
        "BoxOffice": "$389,804,217",
        "Production": "Walt Disney Pictures",
        "Website": "https://marvel.com/guardians",
        "Response": "True"
    }, {
        "Title": "Aquaman",
        "Year": "2018",
        "Rated": "PG-13",
        "Released": "21 Dec 2018",
        "Runtime": "143 min",
        "Genre": "Action, Adventure, Fantasy, Sci-Fi",
        "Director": "James Wan",
        "Writer": "David Leslie Johnson-McGoldrick (screenplay by), Will Beall (screenplay by), Geoff Johns (story by), James Wan (story by), Will Beall (story by), Mort Weisinger (Aquaman created by), Paul Norris (Aquaman created by)",
        "Actors": "Jason Momoa, Amber Heard, Willem Dafoe, Patrick Wilson",
        "Plot": "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",
        "Language": "English",
        "Country": "Australia, USA",
        "Awards": "N/A",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.4/10"
            }, {
                "Source": "Rotten Tomatoes",
                "Value": "65%"
            }, {
                "Source": "Metacritic",
                "Value": "55/100"
            }
        ],
        "Metascore": "55",
        "imdbRating": "7.4",
        "imdbVotes": "169,327",
        "imdbID": "tt1477834",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "Production": "Warner Bros. Pictures",
        "Website": "http://www.aquamanmovie.com/",
        "Response": "True"
    }, {
        "Title": "Glass",
        "Year": "2019",
        "Rated": "PG-13",
        "Released": "18 Jan 2019",
        "Runtime": "129 min",
        "Genre": "Drama, Sci-Fi, Thriller",
        "Director": "M. Night Shyamalan",
        "Writer": "M. Night Shyamalan",
        "Actors": "James McAvoy, Bruce Willis, Samuel L. Jackson, Anya Taylor-Joy",
        "Plot": "Security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities.",
        "Language": "Spanish, English",
        "Country": "USA",
        "Awards": "N/A",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY1OTA2MjI5OV5BMl5BanBnXkFtZTgwNzkxMjU4NjM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.0/10"
            }, {
                "Source": "Rotten Tomatoes",
                "Value": "37%"
            }, {
                "Source": "Metacritic",
                "Value": "42/100"
            }
        ],
        "Metascore": "42",
        "imdbRating": "7.0",
        "imdbVotes": "66,312",
        "imdbID": "tt6823368",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "Production": "Universal Pictures",
        "Website": "http://www.glassmovie.com/",
        "Response": "True"
    }, {
        "Title": "Polar",
        "Year": "2019",
        "Rated": "TV-MA",
        "Released": "25 Jan 2019",
        "Runtime": "118 min",
        "Genre": "Action, Crime",
        "Director": "Jonas Åkerlund",
        "Writer": "Jayson Rothwell (screenplay by), Víctor Santos (based on the Dark Horse graphic novel \"Polar: Came from the cold\" by)",
        "Actors": "Mads Mikkelsen, Vanessa Hudgens, Katheryn Winnick, Fei Ren",
        "Plot": "The world's top assassin, Duncan Vizla, is settling into retirement when his former employer marks him as a liability to the firm. Against his will, he finds himself back in the game going head to head with an army of younger killers.",
        "Language": "English, Russian",
        "Country": "Germany, USA",
        "Awards": "N/A",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjAzNDkzODU3Ml5BMl5BanBnXkFtZTgwNDI4OTExNzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "6.3/10"
            }, {
                "Source": "Rotten Tomatoes",
                "Value": "22%"
            }, {
                "Source": "Metacritic",
                "Value": "19/100"
            }
        ],
        "Metascore": "19",
        "imdbRating": "6.3",
        "imdbVotes": "36,967",
        "imdbID": "tt4139588",
        "Type": "movie",
        "DVD": "25 Jan 2019",
        "BoxOffice": "N/A",
        "Production": "Netflix",
        "Website": "N/A",
        "Response": "True"
    }, {
        "Title": "Alita: Battle Angel",
        "Year": "2019",
        "Rated": "PG-13",
        "Released": "14 Feb 2019",
        "Runtime": "122 min",
        "Genre": "Action, Adventure, Romance, Sci-Fi, Thriller",
        "Director": "Robert Rodriguez",
        "Writer": "James Cameron (screenplay by), Laeta Kalogridis (screenplay by), Robert Rodriguez (screenplay by), Yukito Kishiro (based on the graphic novel series \"Gunnm\" by)",
        "Actors": "Rosa Salazar, Mahershala Ali, Eiza González, Jennifer Connelly",
        "Plot": "Alita is a creation from an age of despair. Found by the mysterious Dr. Ido while trolling for cyborg parts, Alita becomes a lethal, dangerous being. She cannot remember who she is, or where she came from. But to Dr. Ido, the truth is all too clear. She is the one being who can break the cycle of death and destruction left behind from Tiphares. But to accomplish her true purpose, she must fight and kill. And that is where Alita's true significance comes to bear. She is an angel from heaven. She is an angel of death.",
        "Language": "English, Spanish",
        "Country": "Canada, Argentina, USA",
        "Awards": "N/A",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzVhMjcxYjYtOTVhOS00MzQ1LWFiNTAtZmY2ZmJjNjIxMjllXkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_SX300.jpg",
        "Ratings": [],
        "Metascore": "N/A",
        "imdbRating": "N/A",
        "imdbVotes": "N/A",
        "imdbID": "tt0437086",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "Production": "ADV Films",
        "Website": "N/A",
        "Response": "True"
    }, {
        "Title": "Bohemian Rhapsody",
        "Year": "2018",
        "Rated": "PG-13",
        "Released": "02 Nov 2018",
        "Runtime": "134 min",
        "Genre": "Biography, Drama, Music",
        "Director": "Bryan Singer",
        "Writer": "Anthony McCarten (story by), Peter Morgan (story by), Anthony McCarten (screenplay by)",
        "Actors": "Rami Malek, Lucy Boynton, Gwilym Lee, Ben Hardy",
        "Plot": "The story of the legendary rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).",
        "Language": "English",
        "Country": "UK, USA",
        "Awards": "N/A",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDg2NjIxMDUyNF5BMl5BanBnXkFtZTgwMzEzNTE1NTM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            }, {
                "Source": "Rotten Tomatoes",
                "Value": "62%"
            }, {
                "Source": "Metacritic",
                "Value": "49/100"
            }
        ],
        "Metascore": "49",
        "imdbRating": "8.3",
        "imdbVotes": "202,893",
        "imdbID": "tt1727824",
        "Type": "movie",
        "DVD": "22 Jan 2019",
        "BoxOffice": "$89,604",
        "Production": "20th Century Fox",
        "Website": "http://www.bohemianrhapsody.com",
        "Response": "True"
    }, {
        "Title": "Avengers: Endgame",
        "Year": "2019",
        "Rated": "N/A",
        "Released": "26 Apr 2019",
        "Runtime": "N/A",
        "Genre": "Action, Adventure, Fantasy, Sci-Fi",
        "Director": "Anthony Russo, Joe Russo",
        "Writer": "Christopher Markus, Stephen McFeely, Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Jim Starlin (comic book)",
        "Actors": "Bradley Cooper, Brie Larson, Scarlett Johansson, Karen Gillan",
        "Plot": "Plot is unknown.",
        "Language": "English",
        "Country": "USA",
        "Awards": "N/A",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGZiMzBkZjMtNjE3Mi00MWNlLWIyYjItYTk3MjY0Yjg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
        "Ratings": [],
        "Metascore": "N/A",
        "imdbRating": "N/A",
        "imdbVotes": "N/A",
        "imdbID": "tt4154796",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "Production": "Marvel Studios",
        "Website": "N/A",
        "Response": "True"
    }
];
