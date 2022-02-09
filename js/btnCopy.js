
/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var btnEncriptar = document.querySelector('#btn-desencriptar');

const btnCopy = document.querySelector('#btn-copy');

const copyInput = document.querySelector('#msg')


btnCopy.addEventListener("click",function(event){
    event.preventDefault();
	copyInput.focus();
	document.execCommand('selectAll');
	document.execCommand('copy');
	
	msgCopy.innerHTML = "Copiado al portapapeles";
	setTimeout(()=> msgCopy.innerHTML = "", 4000);
	document.getElementById("msg").value = "";
	
});

//document.getElementsByClassName("limpiarinput")[0].value = "";

