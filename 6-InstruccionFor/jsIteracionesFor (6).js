function mostrar()
{var numero= parseInt(prompt("ingrese el número "));
while(isNaN(numero)){
    numero = parseInt(prompt("ese no es un numero.ingrese un numero"))
}
var contadordepar = 0;
for(var contador = 1;contador <= numero;contador ++){
    if(contador /2 == 0) {
        console.log(contador)
    contadordepar = contadordepar + 1 
    }

}

document.write("el numero es" + contadordepar +"</br>")


}//FIN DE LA FUNCIÓN