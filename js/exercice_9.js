let nombre = prompt ("Saisir un chiffre")
let message =""



for (let decompte = 1; decompte <= 10; decompte+=1) {
     
    message += nombre + " x " + " = " + decompte * nombre + "\n";
    
}



alert(message)