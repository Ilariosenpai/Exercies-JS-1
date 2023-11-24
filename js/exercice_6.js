
alert("Veuillez rentrer deux nombres !!!")

function calculate() {
   
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;

    
   

   
    let result = num1 % num2;

    
    alert("Le reste de la division est : " + result);
  }