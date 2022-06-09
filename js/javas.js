Swal.fire('Bienvenido a mi aventura grafica.')

localStorage.setItem("nombre","nombre")
localStorage.setItem("edad","edad")
localStorage.setItem("guardado de localstorage",true)

let variableNombre= localStorage.getItem ("nombre")

console.log(variableNombre)

function guardarNombre(){
    localStorage.setItem("nombreInput", document.getElementById("nombreAguardar", nombreAguardar).value)
};

let obj= JSON.stringify(variableNombre)

let variableEdad= localStorage.getItem ("edad")


console.log(variableEdad)

function guardarNombre2(){
    localStorage.setItem("nombreInput2", document.getElementById("edadAguardar", edadAguardar).value)
};

function empezar(){
    location.href = "paginas/inicio.html";
}

let obj2= JSON.stringify(variableEdad)
