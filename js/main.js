const API_KEY = "c2d638ef";
const URL = "https://www.omdbapi.com/?";

const button = document.getElementById('sendButton');
const inputElement = document.getElementById('inputPeli');
const main = document.getElementById('main');
const porMirar = [];



button.addEventListener('click', ()=> {
    console.log(inputElement.value);
    buscarPeli(inputElement.value);
});

if (localStorage.getItem("porMirar")) {
    let listaLocal = JSON.parse(localStorage.getItem("porMirar"));
    listaLocal.forEach(function(e) {
        let pelicula = new Pelicula(e.titulo, e.anio, e.director, e.resena, e.actores, e.poster);
        porMirar.push(pelicula);
    })
}



/*function buscarPeli(pelicula){
    
    fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&t=${pelicula}`
        

    ).then(function(response){
        console.log(response);
        if (response.status == 404){
            console.log('error 404!!');
        }
        return response.json();
    }).then(function(responseJson){
        console.log('imprimo json', responseJson);
        //madeGrid(responseJson.data);
    })
    .catch(function(error){
        console.log('Fallo!', error);
    })
};*/

function Pelicula(titulo, anio, director, actores, resena, poster) {
    this.titulo = titulo;
    this.anio = anio;
    this.director = director;
    this.actores = actores;
    this.resena = resena;
    this.poster = poster;
}

function buscarPeli(pelicula){
    fetch(`${URL}apikey=${API_KEY}&t=${pelicula}`)
    .then(response => response.json() ) 
    .then(data => {
        dataPeli = new Pelicula(data.Title, data.Year, data.Director, data.Actors, data.Plot, data.Poster);
            main.innerHTML =`
                <div class="container">
                    <div class="row">
                        <h2 id="name">${data.Title}</h2>
                            <div class="col-6">
                            <img class="img-fluid" src="${data.Poster}" alt="imagen de ${data.Title}">
                                <p>Estreno ${data.Year}</p>
                                <p>Director: ${data.Director}</p>
                            </div>
                            <div class="col-6">
                                <p>Reparto: ${data.Actors}</p>
                                <p>Resena: ${data.Plot}</p>
                            </div>
                            <button class="btn btn-warning"  id="agregar" type="button">Agregar a la lista</button>
                    </div>
                </div>    
                `;
            console.log(data);
        })
        .catch(function(error) {
            console.log('UPS algo hiciste mal!', error);
            main.innerHTML = 'Intenta nuevamente con otra pelicula o en su idioma original!';
        });
       
}


function agregarFav() {
    porMirar.push(pelicula);
    console.log(porMirar);
    localStorage.setItem('porMirar', JSON.stringify(porMirar));
}