function mostrar()
{var numero= parseInt(prompt("ingrese el número "));
while(isNaN(numero)){
    numero = parseInt(prompt("ese no es un numero.ingrese un numero"))
}
var contadordepar = 0;
for(var contador = 1;contador <= numero; contador++){
   if(contador % 2 == 0){
       console.log(contador);
       contadordepar++;
   }
   
        
    

}

console.log("cantidad de pares encontrado"+ contadordepar)


}//FIN DE LA FUNCIÓN