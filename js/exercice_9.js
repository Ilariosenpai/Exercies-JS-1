alert("Veuillez rentrer un nombre")



function exo9(){

    let multiplicateur = [1,2,3,4,5,6,7,8,9,10]
    let nombre = document.getElementById("nombre").value

    multiplicateur.forEach(multiplicateur => {

        alert(nombre + " x " + multiplicateur + " = " + nombre * multiplicateur )
        
    });
    
}

