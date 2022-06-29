////*****arrays*******/

const inventario = [];

////*****examples de sweetalert2*******/
function inicio(){
    console.log((Swal.fire({
        icon: 'warning',
        title: 'Silent Hills ',
        text: 'La aventura empezara...!',
        footer: '<a href="">Recuerda ser +18</a>'
      })));
  }
  
  setTimeout(inicio, 7000);

  ////*****entrada*******/
function funcion(){
    location.href = "../paginas/entrada.html";
};


////*****entrada2*******/
function funcionentrada(){
    location.href = "../paginas/calles.html";
};

////******calles*********
function funcion1(){
    location.href = "../paginas/bar.html";
};
function funcion2(){    
    location.href = "../paginas/muerte1.html";
 
};
function funcion3(){
    let cambioImagen = document.getElementById("adelante").src="../img/adelante.jpg";
    document.getElementById("cambioadelante").innerHTML= "Demonios el camino esta totalmentebloqueado debo encontrar a mi hija rapido y irme de este maldito lugar..."     
};

/////*******muertes**********/
function funcionmuerte(){
    let cambioImagen = document.getElementById("muerte2").src="../img/muerte2.jpg"; 

    alert("Te encontras con Pyramid Head un demonio poderoso de Silent Hills")
    let nombre = prompt("Cometiste un error en venir a Silent Hills, me gustaría saber tu nombre antes de que mueras...")
        if(nombre){
            alert(nombre+" Tomaste una mala decision en venir Silent Hills, te has encontrado en el camino a un ser poderoso el cual acabara con tu vida") 
            seleccionarOpcion()
        } else {
            alert("no has ingresado el nombre")
            intermedio(true)
        }
};

function funcionmuerte1(){
    location.href = "../paginas/inicio.html";
};

function funcionmuerte2(){
    let cambioImagen = document.getElementById("muerte3").src="../vid/muertebar2.mp4";

    alert("Al salir corriendo del bar te encuentras con un air screamer, el cual te mata de un golpe en la cabeza")
    let nombre = prompt("Cometiste un error en venir a Silent Hills, me gustaría saber tu nombre antes de que mueras...")
        if(nombre){
            alert(nombre+" Tomaste una mala decision en venir Silent Hills, te has encontrado en el camino a un ser poderoso el cual acabara con tu vida") 
            seleccionarOpcion()
        } else {
            alert("no has ingresado el nombre")
            intermedio(true)
        }
}

////********bar*********/
function funcion4(){
    location.href = "../paginas/bar2.html";
};
function funcion5(){
    location.href = "../paginas/calles.html";
};


/////********bar2**********/

function funcion6(){
    let cambioImagen = document.getElementById("revisar mesa del bar").src="../img/llave.jpg";
    inventario.push("llave")
    document.getElementById("cambio").innerHTML= "Una llave tengo que irme por la puerta de atras antes de que entre sea lo que sea que se encuentre afuera debajo de la mesa habia un codigo (2,5 y 8) para que servira..." }

function funcion7(){
    let cambioImagen= document.getElementById("revisar mesa del bar").src="../img/exit.jpg";
    document.getElementById("cambio").innerHTML="Felicidades completaste la primera parte de mi juego html+css+js,la aventura continuara...";} 

function funcion8(){
    location.href = "../paginas/muerte2.html";
}

