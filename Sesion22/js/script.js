function guardarD(){
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.password = document.getElementById("password").value; 
}

function recuperarD(){
    if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br> Password: " + localStorage.password;
    } else {
        document.getElementById("datos").innerHTML = "No has ingresado tu nombre y password";
    }
}

function borrarD(){
    localStorage.clear;
    
}