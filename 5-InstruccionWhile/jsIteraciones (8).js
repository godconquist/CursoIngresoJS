function mostrar()
{

	var flag=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero;
	do{
		numero = parseInt(prompt("ingrese un numero: "))
		while(isNaN(numero)){
			numero = parseInt(prompt("eso no es un numero. Ingrese un numero"))
		}
		if (numero >=0) {
			positivo = positivo + numero;
		} else{
			negativo = negativo * numero;
			flag = 1;
		}
	    respuesta = prompt("quiere continuar ingrasando numeros")
	} while(respuesta == 'si');
	 if (flag == 0) {
		negativo = 0;
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN