function validarform(){
var peso = document.forms["form"]["numpeso"].value;
peso = peso.trim();
var altura = document.forms["form"]["numaltura"].value;
altura = altura.trim();
var imc = peso/(altura * altura);
imc = imc.toFixed(1); //Duas casas depois da virgula.

	if(altura === 0 || altura === ""){//se isNaN(Not A Number) alerta.
		alert("Altura não recebeu um caracter válido");
	}
	if(peso === 0 || peso === ""){
		alert("Peso não recebeu um caracter válido");
	}
    if(isNaN(peso) || isNaN(altura)){ 
        alert("Não é um caracter válido");
    }
    if(!isNaN(imc)){
     alert("Seu IMC é: "+imc+" kg/m2");
	}
}