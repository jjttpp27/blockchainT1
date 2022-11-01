
var encodedString;

//Primero creamos la funcion para encriptar o codificar y despues crearemos la segunda funcion para desencriptar o codificar.

function encrypt() {

    /* La variable baseString sera un array con los valores que ingrese el usuario por lo que usamos 
     el getElementById para seleccionarlo y .value() para convertirel string en un array.*/
    var baseString = document.getElementById("enc").value;

    // En la variable encodedString se guardara la codificacion del String ingresado por el usuario.
    encodedString = window.btoa(baseString);

    //Finalmente decidimos donde se va mostrar el texto codificado
    document.getElementById("dec").value = encodedString;
}

function decrypt() {

    //Guardamos en decodedString el valor decodificado de "encodedString"
    var decodedString = window.atob(encodedString);

    //Decidimos donde mostrar el mensaje decodificado
    document.getElementById("res").value = decodedString;
}


