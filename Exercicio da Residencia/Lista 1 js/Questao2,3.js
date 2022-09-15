function Notas(nota) 
{
     nota = Number (prompt("Dígite sua média"))
     if (nota >= 0.0 &&  nota <=4.9) 
     {
         var notaFinal = "Sua nota foi resultado D";
     } 
     else if (nota >= 5.0 &&  nota <=6.9)
     {
         var notaFinal = "Sua nota foi resultado C";
     }
     else if (nota >= 7.0 &&  nota <=8.9)
     {
         var notaFinal = "Sua nota foi resultado B";
     }
     else
     {
        var notaFinal = "Sua nota foi resultado A"
     }
     return notaFinal
 }
     alert(Notas());