function encrypt(){

    let message = document.getElementById("input_text").value;
    let lowercaseWithoutAccent = /^[^ÁÉÍÓÚÑáéíóúA-Z]+$/;
    if(lowercaseWithoutAccent.test(message)){

    message = message.replace(/e/g, "enter");
    message = message.replace(/i/g, "imes");
    message = message.replace(/a/g, "ai");
    message = message.replace(/o/g, "ober");
    message = message.replace(/u/g, "ufat");
    document.getElementById("output_text").value = message; 
    document.getElementById("input_text").value = "";

    let displayObjects = document.getElementById("displays");
        displayObjects.style.display = "none";

    let copyButton = document.getElementById("copy_button");
    copyButton.style.display = "block";
}  else{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Only lower case and no accents',
        showConfirmButton: false,
        timer: 1800
        })
}
}
var encryptButton = document.getElementById("encrypt_button");
encryptButton.addEventListener("click", encrypt);

//COMPLETED THE ENCRYPT FUNCTION IN THE BUTTON//

function decrypt(){

 let message = document.getElementById("input_text").value;
 let lowercaseWithoutAccent = /^[^ÁÉÍÓÚÑáéíóúA-Z]+$/;
 if(lowercaseWithoutAccent.test(message)){

    message = message.replace(/enter/g, "e");
    message = message.replace(/imes/g, "i");
    message = message.replace(/ai/g, "a");
    message = message.replace(/ober/g, "o");
    message = message.replace(/ufat/g, "u");
    document.getElementById("output_text").value = message; 
    document.getElementById("input_text").value = "";

    let displayObjects = document.getElementById("displays");
        displayObjects.style.display = "none";

    let copyButton = document.getElementById("copy_button");
    copyButton.style.display = "block";
    }  else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Only lower case and no accents',
            showConfirmButton: false,
            timer: 1800
            })
    }
}
var decryptButton = document.getElementById("decrypt_button");
decryptButton.addEventListener("click", decrypt);

//COMPLETED THE DESENCRYPT FUNCTION IN THE BUTTON//


function copy_clear(){
    
    let copyText = document.getElementById("output_text").value;
    navigator.clipboard.writeText(copyText);
    document.getElementById("output_text").value = "";
    Swal.fire({
        icon: 'success',
        title: 'Copied Message',
        showConfirmButton: false,
        timer: 1000
        })
        let displayObjects = document.getElementById("displays");
        displayObjects.style.display = "block";
    }

var copyButton = document.getElementById("copy_button");
copyButton.addEventListener("click", copy_clear);
