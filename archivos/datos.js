
var idBodega = 0;
var referencia =0;
var cantidad = 0;
var conteo = 0;

function seleccionarBodega(id){
  idBodega = id
  document.getElementById("divForm").style.display ="block";
}


function guardarInfo(){
    document.getElementById(idBodega).style.background = "green";
    referencia = document.getElementById("referencia").value;
    cantidad = document.getElementById("cantidad").value;
    conteo = document.getElementById("conteo").value;
    console.log(idBodega,referencia,cantidad,conteo);
    referencia = document.getElementById("referencia").value ="";
    cantidad = document.getElementById("cantidad").value = "";
    conteo = document.getElementById("conteo").value ="";
    document.getElementById("divForm").style.display = "none";
}

function cancelar (){
  referencia = document.getElementById("referencia").value ="";
  cantidad = document.getElementById("cantidad").value = "";
  conteo = document.getElementById("conteo").value ="";
  document.getElementById("divForm").style.display = "none";
}
