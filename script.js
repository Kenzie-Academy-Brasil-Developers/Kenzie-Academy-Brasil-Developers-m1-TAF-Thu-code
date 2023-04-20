// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
const gender = process.argv[2]; // Genero 
const height = process.argv[3]; // Altura
const barReps = process.argv[4]; // Repetições com barra
const barSeconds = process.argv[5]; // Tempo das repetições com barra 
const abs = process.argv[6]; // Abdominais
const runDistance = process.argv[7]; // Distância da corrida
const runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**


if(gender === "male"){  //verifica se o genero é masculino
    if(height >= 1.70){ //Verifica se a altura minima é 1.70 
    
        if(barReps >= 6 || barSeconds >= 15){  //Verifica a repetição em barra e segundos

            if(abs >= 41){  //Verifica pelo menos 41 abdominais ou mais

                if(runDistance >= 3000 && runTime <= 720 ||  
                    runDistance >= 5000 && runTime <= 1200)
                    { // Verifica distancia percorrida e segundos

                    if(swimDistance >= 100 && swimTime <= 60 || diveTime <= 30){ //Verifica o nado e o segundos
                        passed = true;  // se foi aprovado em todos os requisitos vai ser true
                    }
                }
            }
        }
    }
}
else if (gender === "female"){ // Verifica se o Genero é feminino
    if(height >= 1.60){ // Verifica se a altura é igual ou maior 1.60

        if(barReps >= 5 || barSeconds >= 12){ // Verifica a repetição em barra e segundos


            if(abs >= 41){ // Verifica pelo menos 41 abdominais ou mais 

                if(runDistance >= 4000 && runTime <= 900 || 
                runDistance >= 6000 && runTime <= 1320){ // Verifica distancia percorrida e segundos

                    if(swimDistance >= 100 && swimTime <= 60 || 
                    diveTime <= 30){ // Verifica distancia da natação tempo e mergulho
                    passed = true;
                    }
                } 
            }
        }
    }
}else{
passed = false; // se foi aprovado em todos os requisitos vai ser false
}




//
    
  
/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
