/* 
🌟 APP: Make Netflix

Here we have the Netflix app but it's up to you to make it work by pulling all the movies using an API!

Create a fetchMovies() function that will make a dynamic API call to what you need 👇
========================================

fetchMovies()

** fetchMovies takes in an URL, a div id or class from the HTML, and a path (poster or backdrop)



These are the 3 main functions and their URL'S you must create  👇
========================================

- getOriginals()
  * URL : 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'

- getTrendingNow()
  * URL : 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'

- getTopRated()
  * URL : 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'


** These functions will provide the URL you need to fetch() movies of that genere **

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 CLASS 👉 'original__movies' = Div that holds Netflix Originals
#2 ID 👉 'trending' = Div that holds trending Movies
#3 ID 👉 'top_rated' = Div that holds top rated Movies
*/


// Call the main functions the page is loaded
window.onload = () => {
  getOriginals()
  getTrendingNow()
  getTopRated()
}

// ** Helper function that makes dynamic API calls **
function fetchMovies(url, dom_element, path_type) {
    fetch(url)
    .then(response =>{
      if(response.ok){
        return response.json()
      }else{
      throw new Error("Something went wrong") 
      }
    })
    .then(data => {
      showMovies(data,dom_element,path_type)
  })
  .catch(error =>{
    console.log(error)
  })

  // Within Fetch get the response and call showMovies() with the data , dom_element, and path type
}

//  ** Function that displays the movies to the DOM **
showMovies = (movies, dom_element, path_type) => {
  
  // Create a variable that grabs id or class
 var moviesElement = document.querySelector(dom_element)

  // Loop through object
  for(let movie of movies.results){
 
    // Within loop create an img element
    let ImageElement = document.createElement('img')
    // Set attribute
    ImageElement.setAttribute("data_id", movie.id)
    // Set source
    ImageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`
    
    // Add event listener to handleMovieSelection() onClick
    ImageElement.addEventListener('click', e => {
      handleMovieSelection(e)
    })
    // Append the imageElement to the dom_element selected
    moviesElement.appendChild(ImageElement)
  }
  console.log(movies)
}


// ** Function that fetches Netflix Originals **
function getOriginals() {
  let url =
  'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'

   fetchMovies(url,".original__movies","poster_path")
}
// ** Function that fetches Trending Movies **
function getTrendingNow(){
  let url =
  'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'

  fetchMovies(url,"#trending","backdrop_path")
 
}


// ** Function that fetches Top Rated Movies **
function getTopRated() {
 let url =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'

  fetchMovies(url,"#top_rated","backdrop_path")
}

// ** BONUS **

// ** Fetches URL provided and returns response.json()
async function getMovieTrailer(id) {
  let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
    fetch(url)
      .then(response =>{
        if(response.ok){
          return response.json()
        }else{
        throw new Error("Something went wrong") 
        }
      }
  )}
  

let textChange = document.getElementById("textChange");

textChange.addEventListener("mouseover",function(){
textChange.style.color = "lightgray";
textChange.style.fontSize = "16px,bold";

})


