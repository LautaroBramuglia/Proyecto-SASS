function inicio(){
    console.log((Swal.fire('Bienvenido a mi aventura grafica Silent Hills ingrese su edad.')));
  }
  
  setTimeout(inicio, 2000);
  const URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = "387365adff8b7213fa38108f14aa5421"

function obtenerClima(city) {
  fetch(`${URL}${city}&units=metric&APPID=${API_KEY}&lang=sp`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById('city-name').textContent = data.name;
      document.getElementById('card-result').classList.remove('d-none');
      document.getElementById('foto').src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
      document.getElementById('temperatura').textContent = `${parseInt(data.main.feels_like)}°`;
    })
    .catch(() => {
      document.getElementById('card-result').classList.add('d-none');
      mostrarError('Ciudad no encontrada');
    });
}

function mostrarError(mensaje) {
  const error = document.createElement('div'); 
  error.classList.add('alert', 'alert-danger', 'mt-3', "text-center");
  error.textContent = mensaje;
  document.getElementById("error").appendChild(error);
  setTimeout(function () {
      document.querySelector('.alert').remove();
  }, 3000);
}

document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();
  const city = document.getElementById("city").value;
  obtenerClima(city);
})



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
