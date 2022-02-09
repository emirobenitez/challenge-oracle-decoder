/*
 Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var btnEncriptar = document.querySelector('#btn-encriptar');

var input = document.querySelector('#msg');


btnEncriptar.addEventListener("click",function(event){
    event.preventDefault();
	
var form = document.querySelector("#form_encriptar");
    
var input_texto = form.input_texto.value;

let arr = [];

for(let i of input_texto) {
    if(i == "a"){
		i = "ai";
		arr.push(i);
	}
	else if(i == "e"){
		i = "enter";
		arr.push(i);
	}
	else if(i == "i"){
		i = "imes";
		arr.push(i);
	}
	else if(i == "o"){
		i = "ober";
		arr.push(i);
	}
	else if(i == "u"){
		i = "ufat";
		arr.push(i);
	}
	else{
	arr.push(i);
	}
}

	
let input_arr = arr.join("");


document.getElementById("msg").value = input_arr;


});
