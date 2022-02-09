
/* Reglas de desencriptación: 
"ai" es convertido para "a"
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
<!-- letra a -->
var letra_a = /ai/;

<!-- letra e -->
var letra_e = /enter/;

<!-- letra i -->
var letra_i = /imes/;

<!-- letra o -->
var letra_o = /ober/;

<!-- letra u -->
var letra_u = /ufat/;

var btnDesEncriptar = document.querySelector('#btn-desencriptar');


btnDesEncriptar.addEventListener("click",function(event){
    event.preventDefault();
	
var form = document.querySelector("#form_encriptar");
    
var input_texto = form.input_texto.value;

for(var i = 0; i< input_texto.length;i++){
	var newstr = input_texto.replace(letra_a, "a");
	input_texto = newstr;
}	

for(var i = 0; i< input_texto.length;i++){
	var newstr = input_texto.replace(letra_e, "e");
	input_texto = newstr;
}		

for(var i = 0; i< input_texto.length;i++){
	var newstr = input_texto.replace(letra_i, "i");
	input_texto = newstr;
		
}

for(var i = 0; i< input_texto.length;i++){
	var newstr = input_texto.replace(letra_o, "o");
	input_texto = newstr;

}

for(var i = 0; i< input_texto.length;i++){
	var newstr = input_texto.replace(letra_u, "u");
	input_texto = newstr;
}	

document.getElementById("input_texto").value = newstr;


});


	

