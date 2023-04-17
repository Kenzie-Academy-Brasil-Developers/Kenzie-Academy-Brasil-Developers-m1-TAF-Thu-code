// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
gender = process.argv[2]; // Genero 
height = process.argv[3]; // Altura
barReps = process.argv[4]; // Repetições com barra
barSeconds = process.argv[5]; // Tempo das repetições com barra 
abs = process.argv[6]; // Abdominais
runDistance = process.argv[7]; // Distância da corrida
runTime = process.argv[8]; // Tempo da corrida
swimDistance = process.argv[9]; // Distância da natação
swimTime = process.argv[10]; // Tempo da natação
diveTime = process.argv[11]; // Tempo de mergulho

passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**


if(gender === "male"){  //VERIFICA O GENERO 
    if(height >= 1.70){ //VERIFICA A ALTURA 
    
        if(barReps >= 6 || barSeconds >= 15){  //VERIFICA REPETIÇÃO NA BARRA

            if(abs >= 41){  //VERIFICA ABDOMINAIS

                if(runDistance >= 3000 && runTime <= 720 ||  //VERIFICA DISTANCIA CORRIDA
                    runDistance >= 5000 && runTime <= 1200){

                    if(swimDistance >= 100 && swimTime <= 60 || diveTime <= 30){ //VERIFICA O NADO 
                        passed = true;  
                    }
                }
            }
        }
    }
}
    else if (gender === "female"){ // VERIFICA O GENERO 
        if(height >= 1.60){ //VERIFICA A ALTURA

            if(barReps >= 5 || barSeconds >= 12){ // VERIFICA BARRA

                if(abs >= 41){ //VERIFICA ABDOMINAIS

                    if(runDistance >= 4000 && runTime <= 900 || 
                    runDistance >= 6000 && runTime <= 1320){ //VERIFICA CORRIDA 

                        if(swimDistance >= 100 && swimTime <= 60 || 
                        diveTime <= 30){ //VERIFICA NATAÇÃO
                        passed = true;
                        }
                    } 
                }
            }
        }
    }else{
    passed = false; //
    }



//
    
  
/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
