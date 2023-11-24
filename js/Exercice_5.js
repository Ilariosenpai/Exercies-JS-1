
alert("Veuillez rentrer deux nombres à virgule, veillez à bien remplacer les virgules par des points !!!")

function calculate() {
   
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;

    
    num1 = Math.floor(num1);

   
    let result = num1 * num2;

    
    alert("Le résultat de la multiplication est : " + result);
  }