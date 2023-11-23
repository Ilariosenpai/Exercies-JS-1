
alert("Veuillez rentrer deux nombres à virgule")

function calculate() {
   
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;

    
    num1 = Math.floor(num1);

   
    let result = num1 * num2;

    
    alert("Le résultat de la multiplication est : " + result);
  }