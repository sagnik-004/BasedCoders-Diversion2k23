const APILINK="https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookupsort_by=popularity.desc&api_key=e31a02cdeamsha819c4ed01b1d4dp1ec642jsnd142cddf2102"
const IMAGE_PATH="https://www.themoviedb.org/talk/5cc038239251410671fc8fde";
const SEARCHAPI="https://api.themoviedb.org/3/search/movie?&api_key=e31a02cdeamsha819c4ed01b1d4dp1ec642jsnd142cddf2102"
const main= document.getElementById("section")
const form= document.getElementById("form")
const search= document.getElementById("query")

returnMovies(APILINK)
function returnMovies(url){
 fetch(url).then(res => res.json())
 .then(function(data){
    console.log(data.results);
    data.results.forEach(element => {
       console.div_card=document.createElementById("div"); 
       console.div_row=document.createElementById("div"); 
       console.div_column=document.createElementById("div"); 
       console.title=document.createElementById("h3"); 
       console.imge=document.createElementById("img"); 
       console.center=document.createElementById("center"); 

       title.innerHTML =`$(element.title)`;<br><a href="movie.html?
       id=${element.id}&title=${element.title}">reviews</a></br>;`
       Image.src= IMAGE_PATH+ element.poster_path;

       center.appendChild(image);
       div_card.appendChild(center);
       div_card.appendChild(title);
       div_column.appendChild(div_card);
       div_row.appendChild(div_column);
       
       main.appendChild("div_row");

    });
  });
 }

form.addEventListener("submit",(e) =>{
    e.preventDefault();
    main.innerHTML=''
    const searchItem= search.value;

    if(searchItem){
        returnMovies(SEARCHAPI+searchItem);
        search.value="";
    }
});


