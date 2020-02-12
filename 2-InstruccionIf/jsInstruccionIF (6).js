function mostrar()
{
//tomo la edad  
var edad
edad = parseInt(document.getElementById("edad").value);
if(edad <13){
    alert ("niño");
}
else if (edad<= 17)
{
    alert("adolecente");
}
else if (edad <= 65) {
 alert ("adulto");

} else {
    alert("anciano");
}

}//FIN DE LA FUNCIÓN