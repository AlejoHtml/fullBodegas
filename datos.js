(async () => {
  const response = await fetch("http://localhost:8080/status" );
  const datos = await response;//json();
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
    var input = {
      idBodega: idBodega,
      referencia: referencia,
      cantidad: cantidad
    };
    console.log(input);
    (async () => {
      const response = await fetch("http://localhost:8080/inventario/registrar", {
        method: "POST",
        body: JSON.stringify(input),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      } );
      const datos = await response;//json();
      console.log(datos);
      document.getElementById("divForm").style.display = "none";
      referencia = document.getElementById("referencia").value ="";
      cantidad = document.getElementById("cantidad").value = "";
    })();
}
function cancelar (){
  referencia = document.getElementById("referencia").value ="";
  cantidad = document.getElementById("cantidad").value = "";
  document.getElementById("divForm").style.display = "none";
}