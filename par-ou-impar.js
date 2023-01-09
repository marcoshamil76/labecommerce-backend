function getRndInteger(min,max){
    return Math.floor(Math.random()*(max - min +1))+min}
    const numero = process.argv[2]
    const escolha = process.argv[3]
    const numeroComputer = getRndInteger(0,10)

    console.log(numeroComputer)
    console.log(numero)
    if(!numero || !escolha){
        console.log("Digite um número e sua opção")
    }else{
        if(((Number(numero) + numeroComputer)%2) === 0){
            if(escolha === "par"){

                console.log("Você escolheu Par e venceu")
            }else{
                console.log("Você escolheu Impar e o Computer venceu")
                
            }
            
        }else{
            if(escolha === "impar"){

                console.log("Você escolheu Impar e venceu")
            }else{
                console.log("Você escolheu Par e o Computer venceu")
                
            }
            
        }
    }