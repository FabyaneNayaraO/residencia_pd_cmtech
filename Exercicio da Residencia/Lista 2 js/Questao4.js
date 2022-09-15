function experiencia(anos)
 {
     anos = Number (prompt("Quantos anos você tem de experiência:"))
     if (anos >= 0 &&  anos <=1) {
         var Expr = "Iniciante";
     } 
     else if (anos >= 1 &&  anos <=3){
         var Expr = "Intermediario";
     }
     else if (anos >= 3 &&  anos <=6) {
         var Expr = "Avançado";
     }
     else{
        var Expr = "Jedi master"
     }
     return Expr
 }
     console.log(experiencia());