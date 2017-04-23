
alert("PQP");


var a = 10; 
var b = 33; 

function somar(a,b ){ 

  return a + b ; 

 }


   

   document.getElementById('btn-calcular').onclick = function(){
   //convertendo os valores, para alterar do tipo STR para INT ou FLOAT
   var valorA = document.getElementById("valor-a").value;
   var valorB = document.getElementById("valor-b").value;
   console.log (parseInt(valorA) + parseInt(valorB));
   }

 