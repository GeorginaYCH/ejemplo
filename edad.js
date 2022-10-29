var edad;
edad=parseInt(prompt("Ingrese Edad"));
if(edad>=0 && edad<=10){
    document.write("Eres Niño"+ "<br>");
    document.write('<img src="img/niño.jpg">');
}
else if(edad>10 && edad<=17){
    document.write("Eres Adolescente"+"<br>");
    document.write('<img src="img/adolescente.jpg">');
}
else if(edad>17 && edad<=30){
    document.write("Eres Joven"+"<br>");
    document.write('<img src="img/joven.jpg">');
}
else{
    document.write("Eres Adulto"+"<br>");
    document.write('<img src="img/adulto.jpg">');
}
