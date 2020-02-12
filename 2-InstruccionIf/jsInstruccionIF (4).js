function mostrar()
{
//tomo la edad  
var edad;
edad=parseInt(document.getElementById("edad").value);
//pregunte si la edad esta dentro del rango
/*
if(edad >=13 && edad <=17)
{
    alert("es adolecente")
}*/
// si la edad no esta fuera del rango
if (!(edad <13 || edad > 17)){
    alert("es adolecente");

} 
} 

//FIN DE LA FUNCIÓN