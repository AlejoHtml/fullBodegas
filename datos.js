(async () => {
  const response = await fetch("http://localhost:3000/api/products");
  const datos = await response.json();
  console.log(datos);
})();

var idBodega = 0;
var referencia =0;
var cantidad = 0;

function seleccionarBodega(id){
  idBodega = id
  document.getElementById("divForm").style.display ="block";
}
function guardarInfo(){
    document.getElementById(idBodega).style.background = "green";
    referencia = document.getElementById("referencia").value;
    cantidad = document.getElementById("cantidad").value;
    console.log(idBodega, referencia, cantidad);
    referencia = document.getElementById("referencia").value ="";
    cantidad = document.getElementById("cantidad").value = "";
    document.getElementById("divForm").style.display = "none";
}
function cancelar (){
  referencia = document.getElementById("referencia").value ="";
  cantidad = document.getElementById("cantidad").value = "";
  document.getElementById("divForm").style.display = "none";
}