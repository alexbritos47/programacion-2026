function verificarCodigo(){

  let codigo = document.getElementById("codigo").value;

  if(codigo === "2009"){
    alert("🎉 ¡Escapaste!");
  }else{
    alert("❌ Código incorrecto");
  }

}