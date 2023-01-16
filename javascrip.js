
   
   function encriptar(){

      let mensaje = document.getElementById("input_text").value;
      let lowercaseWithoutMayandAccent = /^[^ÁÉÍÓÚÑáéíóúA-Z]+$/;
      if(lowercaseWithoutMayandAccent.test(mensaje)){

         mensaje = mensaje.replace(/e/g, "enter");
         mensaje = mensaje.replace(/i/g, "imes");
         mensaje = mensaje.replace(/a/g, "ai");
         mensaje = mensaje.replace(/o/g, "ober");
         mensaje = mensaje.replace(/u/g, "ufat");
         document.getElementById("mensaje_encriptado").value = mensaje; 
         document.getElementById("input_text").value = "";

      let displayObjetos = document.getElementById("display_esperandoMensaje");
         displayObjetos.style.display = "none";

      let copiarBoton = document.getElementById("copiar_boton");
      copiarBoton.style.display = "block";
   }  else{
      alert("Solo minúsculas y sin acentos")
   }
}
var encriptarButton = document.getElementById("encriptar_boton");
encriptarButton.addEventListener("click", encriptar);

//COMPLETED THE ENCRYPT FUNCTION IN THE BUTTON//


function desencriptar(){

   let mensaje = document.getElementById("input_text").value;
   let lowercaseWithoutMayandAccent = /^[^ÁÉÍÓÚÑáéíóúA-Z]+$/;
   if(lowercaseWithoutMayandAccent.test(mensaje)){

      mensaje = mensaje.replace(/enter/g, "e");
      mensaje = mensaje.replace(/imes/g, "i");
      mensaje = mensaje.replace(/ai/g, "a");
      mensaje = mensaje.replace(/ober/g, "o");
      mensaje = mensaje.replace(/ufat/g, "u");
      document.getElementById("mensaje_encriptado").value = mensaje; 
      document.getElementById("input_text").value = "";

   let displayObjetos = document.getElementById("display_esperandoMensaje");
      displayObjetos.style.display = "none";

   let copiarBoton = document.getElementById("copiar_boton");
   copiarBoton.style.display = "block";
}  else{
   alert("Solo minúsculas y sin acentos")
}
}
var desencriptarButton = document.getElementById("desencriptar_boton");
desencriptarButton.addEventListener("click", desencriptar);

//COMPLETED THE DESENCRYPT FUNCTION IN THE BUTTON//


   function copiar(){
      
      let copiarTexto = document.getElementById("mensaje_encriptado").value;
      navigator.clipboard.writeText(copiarTexto);
      document.getElementById("mensaje_encriptado").value = "";
      }

var copiarButton = document.getElementById("copiar_boton");
copiarButton.addEventListener("click", copiar);