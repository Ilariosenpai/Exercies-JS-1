let mot = prompt("Saisissez un mot :");


let resultat = "";


for (let i = 0; i < mot.length; i++) {
    resultat += mot[i] + "\n";
}


alert(resultat);