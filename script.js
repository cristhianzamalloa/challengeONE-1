function alpha(e) {
            var k;
            document.all ? k = e.keyCode : k = e.which;
            return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
    }

function encriptar () {

	var str = input.value;
	var mapObj = {
   		a:"ai",
   		e:"enter",
   		i:"imes",
   		o: "ober",
   		u: "ufat",

	}

	str = str.replace(/a|e|i|o|u/gi, function(matched){
  	return mapObj[matched];
  	
	});

	document.getElementById("mensajeEncriptado").value = str

	var buttonEncriptar = document.querySelector(".buttonEncriptar");


}

	
function desencriptar() {

	var str = input.value;
	var mapObj = {
   		ai:"a",
   		enter:"e",
   		imes:"i",
   		ober: "o",
   		ufat: "u",

	}

	str = str.replace(/ai|enter|imes|ober|ufat/gi, function(matched){
  	return mapObj[matched];
  	
	});

	document.getElementById("mensajeEncriptado").value = str

	var buttonDesencriptar = document.querySelector(".buttonDesencriptar");


}



function copiar () {

	var content = document.getElementById('mensajeEncriptado');
	
	content.select();
	document.execCommand('copy');


	alert("Texto Copiado");

}


//Encriptar
var input = document.querySelector("input");
buttonEncriptar.onclick = encriptar;

//Desencriptar
var input = document.querySelector("input");
buttonDesencriptar.onclick = desencriptar;

//Copiado
buttonCopiar.onclick = copiar;

	

	

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/


