function mostrar()
{

	var flag=0;
	// declarar variables
	var maximo
	var minimo
	var numero
	var respuesta='si';
	
	do{
		// pido un numero al usuario
	 numero = parseInt(prompt("ingrese un numero"));
		//valido que sea un numero
	    while (isNaN(numero)) {
		
			numero = parseInt(prompt("eso no es un numero. Ingrese un numero"));
	    }
	  // me fijo si es maximo o minimo
	  if (flag ==0 || numero > maximo){
		  maximo = numero
	  }
	  if (flag == 0 || numero < minimo){
		  minimo = numero;
		  flag = 1;
	  }


	    // pregunto si quiere continuar 
	   respuesta = prompt("quiere ingresar otro numero")
	}while(respuesta=='si');
	document.getElementById("maximo").value=maximo
	document.getElementById("minimo").value=minimo
	
} //FIN DE LA FUNCIÓN