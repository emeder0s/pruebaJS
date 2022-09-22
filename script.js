//EJERCICIO1
function option1(){
    do{
        var num1 = parseFloat(window.prompt("Escribe un numero: "));
        
        var validation = Number.isInteger(num1)
        if(!validation){
            alert("OJO! NO es un número CORRECTO");
        }
    }while(!validation)

    do{
        var num2 = parseFloat(window.prompt("Escribe otro numero: "));
        
        var validation = Number.isInteger(num2)
        if(!validation){
            alert("OJO! NO es un número CORRECTO.");
        }
    }while(!validation)
    var pares = "";
    var multiplo = "";

    //par o impar
    if (num1%2 == 0 && num2%2==0){
        pares = "Ambos números son pares. ";
    }else if (num1%2 != 0 && num2%2==0){
        pares = num2 +" es par, pero " + num1 + " no lo es. ";
    }else if (num1%2 == 0 && num2%2!=0){
        pares = num1 +" es par, pero " + num2 + " no lo es. ";
    }else{
        pares = "Ooohhh!! NINGUNO es par. ";
    }

    //multiplo de 25 o no
    if (num1%25 == 0 && num2%25==0){
        multiplo = "Además son los dos números múltiplos de 25";
    }else if (num1%25 != 0 && num2%25==0){
        multiplo = "También " + num2 +" es múltiplo de 25, pero " + num1 + " no lo es.";
    }else if (num1%25 == 0 && num2%25!=0){
        multiplo = "También " + num1 +" es de 25, pero " + num2 + " no lo es.";
    }else{
        multiplo = "Además en este caso, ninguno es múltiplo";
    }1
    2
    alert(pares + multiplo);
}

function option2(){
    var word = window.prompt("Por favor, introduce una palabra: ");
    var validation = word[0] == "a" || word[word.length-1] == "a";
    if (validation){
        alert("Yuhuu! La palabra " + word.toUpperCase() + " empieza y termina por A")
    }else{
        alert("Bueno, en este caso, la palabra " + word.toUpperCase() + ");
    }

}

function chooseOption(){
    var num = parseFloat(window.prompt("Elige una opción: "));
    switch(num){
        case 1: 
            option1();
            break;
        case 2: 
            option2();
            break;
        default:
            alert("OJO! Esa opción NO es correcta"); 
    }
    
    
}

chooseOption()