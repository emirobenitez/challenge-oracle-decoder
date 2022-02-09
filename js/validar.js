// Dar foco a un campo de texto  inmediatamente se carga
window.onload = function() {
    document.getElementById("msg").focus();
  };

  // funcion para validar solo minusculas, ni especiales, ni numeros
  function  soloMinusculas(e)
  {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toString();
  letras = "a b c d e f g h i j k l m n ñ o p q r s t u v w x z";
  
  especiales = [8,13,164];
  tecla_especial = false
  for(var i in especiales) {
  if(key == especiales[i]){
   tecla_especial = true;
   break;
  }
  }
  
  if(letras.indexOf(tecla) == -1 && !tecla_especial)
  {
   alert("Ingresar solo letras minúsculas, sin tildes");
   return false;
  }
  }