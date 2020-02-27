function mostrar()
{var nota
 var genero
 var notama
 var notame
 var generome
 var generoma
 var contadorvaronesmas6=0;
 var acumuladornotas=0;
 var promedio
 var flag = 0;
 for(vari=0;i<5; i++){
 nota = parseInt(prompt("ingrese  nota(0-10):"));
 //aca valido la nota
 while(nota < 0 || nota > 10 || isNaN(nota)){
     nota=parseInt(prompt("eso no es un numero.ingrese un numero"))
    }
    genero= prompt("ingrese el genero (f-m): ");
    //aca valido el genero
    while(genero!="f" && "m" ){
        genero= prompt( "eso no es un genero.Ingrese un genero");
    }
    acumuladornotas =acumuladornotas + nota;
    if (nota < notame||flag ==0){
        notame = nota;
        generome = genero;
        flag=1;
    }
    if (sexo == "m" && nota >=6){
       contadorvaronesmas6++;
    }

}

promedio= acumuladornotas / 5;
alert( "promedio de notas:"+ promedio)
}   
