const API_KEY = "c2d638ef";

const button = document.getElementById('sendButton');
const main = document.getElementById('main');
const inputElement = document.getElementById('inputPeli');


button.addEventListener("click", ()=> {
    console.log(inputElement.value);
    buscarPeli(inputElement.value);
});

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

function buscarPeli(pelicula){
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${pelicula}`)
    .then(response => response.json() ) 
    .then(data => {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Algo falló!', error);
        
    })
       
}