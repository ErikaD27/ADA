let tabla = document.getElementById('T1');
    let filas = tabla.getElementsByTagName('td');

    document.getElementById('resultado').innerText = filas.length;
    
let matriz = [["-","-","-","-","-","-","-","-"],
              ["-","-","-","-","-","-","-","-"],
              ["-","-","-","-","-","-","-","-"],
              ["-","-","-","-","-","-","-","-"],
              ["-","-","-","-","-","-","-","-"],
              ["-","-","-","-","-","-","-","-"],
              ["-","-","-","-","-","-","-","-"],
      ["-","-","-","-","-","-","-","-"]];
console.log(matriz);

function generateMine(){
let contador = 0;
for (i = 0; i < matriz.length ; i++){
matriz[i][Math.random() * (7)] = "*" ;
matriz[i][Math.random() * (7)] = "*" ;
}
}


function Coordinates() {
  var mensaje;
  let Cord1 = parseInt(prompt("Ingrese la coordenada 1"));
  let Cord2 = parseInt(prompt("Ingrese la coordenada 2"));
    
  if (filas.length >= (Cord2*Cord1)) {
    mensaje = "Has ingresado coordenadas válidas";
  } else {
    mensaje = "Haz ingresado coordenadas inválidas";
  }
  document.getElementById("Mensaje").innerHTML = mensaje;
}





