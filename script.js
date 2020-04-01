//FILMOVERZICHT


const addMoviesToDOM = function(array) {

  array.forEach(function(arrayItem) {

    addItemsToDOM(arrayItem);

  })
};

const addItemsToDOM = function(arrayItem) {

  let movieList = document.getElementById("movie-list");
  let movieItem = document.createElement("li");
  let movieLink= document.createElement("a");
  let moviePoster = document.createElement("IMG");
  movieLink.href= "https://www.imdb.com/title/"+arrayItem.imdbID;
  moviePoster.src = arrayItem.Poster;


  movieLink.appendChild(moviePoster);
  movieItem.appendChild(movieLink);
  movieList.appendChild(movieItem);


};

addMoviesToDOM(movies);




//RADIOBUTTONS




document.querySelectorAll(".filterButton").forEach(item => {

  console.log(item);

  item.addEventListener('change', function(item) {


    filterMyMovies(event);

  })
});


//EVENT FUNCTIE

const filterMyMovies = function(event) {

  while (document.getElementById("movie-list").hasChildNodes()) {
    document.getElementById("movie-list").removeChild(document.getElementById("movie-list").firstChild);}

  switch (event.target.value) {

    default:

      addItemsToDOM(movies);

      break;

    case "X-men":

      const xMenArray = movies.filter(function(movie) {

        return movie.Title.includes("X-Men");

      });

      addMoviesToDOM(xMenArray);

      break;

    case "Avengers":

      const avengersArray = movies.filter(function(movie) {

        return movie.Title.includes("Avengers");

      });

      addMoviesToDOM(avengersArray);

      break;

    case "Princess":

      const princessArray = movies.filter(function(movie) {

        return movie.Title.includes("Princess");

      });

      addMoviesToDOM(princessArray);

      break;

    case "Batman":

      const batmanArray = movies.filter(function(movie) {

        return movie.Title.includes("Batman");

      });

      addMoviesToDOM(batmanArray);

      break;

    case "Nieuwste films":

      const nieuwsteFilmArray = movies.filter(function(movie) {

        movie.Year = parseInt(movie.Year);

        return movie.Year >= 2015;

      });

      addMoviesToDOM(nieuwsteFilmArray);


  }
}



//FILTERFORM


/*
document.getElementById("filterForm").addEventListener()

const filteredArray = movies.filter(function(movie) {

  //INPUT NEEDED

  return movie.Title.includes(input);

});

addMoviesToDOM(filteredArray);
*/
