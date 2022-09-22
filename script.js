//EJERCICIO 1
function option1(){
    do{
        var num1 = parseFloat(window.prompt("Escribe un numero entero: "));    
        var validation = Number.isInteger(num1)
        if(!validation){
            alert("OJO! NO es un número CORRECTO");
        }
    }while(!validation)

    do{
        var num2 = parseFloat(window.prompt("Escribe otro numero entero: "));
        
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
    }
    
    alert(pares + multiplo);
}

function option2(){
    do{
        var word = window.prompt("Por favor, introduce una palabra: ");
        //No permitimos caracteres numéricos en las palabras
        var re = /^[a-zA-Z]+$/;
        var checkWord = re.test(word);
        if(!checkWord){
            alert("OJO! Las palabras no tienen carácteres numéricos. Vuelve a intentarlo");
        }
    }while(!checkWord)

    var validation = word[0] == "a" && word[word.length-1] == "a";
    if (validation){
        alert("Yuhuu! La palabra " + word.toUpperCase() + " empieza y termina por A.")
    }else{
        alert("La palabra " + word.toUpperCase() + " empieza por "+ word[0].toUpperCase() +" y termina por "+ word[word.length-1].toUpperCase()+"." );
    }
}

//EJERCICIO 2
function ejercicio2(){
    var sentence = window.prompt("Pues venga, introduce una frase: ");
    //Limpiamos la frase para que no hayan dobles espacios
    sentence = sentence.replace("  "," ");
    //ni espacios al inicio
    if (sentence[0]==" "){
        sentence = sentence.slice(1);
    }
    //ni espacios al final
    if (sentence[sentence.length-1]==" "){
        sentence = sentence.substring(0, sentence.length - 1);
    }
    
    let blanks = 0;
    for (let i=0;i<sentence.length;i++){
        if(sentence[i]== " "){
            blanks++;
        }
    }
    
    if (blanks == 0){
        alert("Esta frase tiene 1 única palabra");
    }else{
        numWords = blanks + 1;
        alert("Esta frase tiene " + numWords + " palabras");
    }
}