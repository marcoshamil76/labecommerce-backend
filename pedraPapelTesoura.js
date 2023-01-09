function getRndInteger(min,max){
    return Math.floor(Math.random()*(max - min +1))+min}
    const escolha = process.argv[2]
    let escolha2 = Number("")
    const escolhaComputer = getRndInteger(1,3)
    console.log(escolhaComputer)
    if(escolha === "pedra"){
        escolha2 = 1
    }else{
        if(escolha === "papel"){
            escolha2 = 2

        }else{
            escolha2 = 3
        }
    }
    if(!escolha){
        console.log("Faça sua escolha")
    }else{
        if(escolha2 === escolhaComputer){
            console.log("houve empate!!")
        }else{
            if(escolha2 === 1 && escolhaComputer=== 2){
                console.log(`Você escolheu ${escolha} o computer escoheu Papel, vc Perdeu!!!`)
            }else{
                if(escolha2 === 1 && escolhaComputer=== 3){
                    console.log(`Você escolheu ${escolha} o computer escoheu Tesoura, vc Ganhou!!!`)
                   
                }
            }
            }
        }
        if(!escolha){
            console.log("Faça sua escolha")
        }else{
            if(escolha2 === escolhaComputer){
                console.log("houve empate!!")
            }else{
                if(escolha2 === 2 && escolhaComputer=== 1){
                    console.log(`Você escolheu ${escolha} o computer escoheu Pedra, vc Venceu!!!`)
                }else{
                    if(escolha2 === 2 && escolhaComputer=== 3){
                        console.log(`Você escolheu ${escolha} o computer escoheu Tesoura, vc Perdeu!!!`)
                       
                    }
                }
                }
            }
            if(!escolha){
                console.log("Faça sua escolha")
            }else{
                if(escolha2 === escolhaComputer){
                    console.log("houve empate!!")
                }else{
                    if(escolha2 === 3 && escolhaComputer=== 2){
                        console.log(`Você escolheu ${escolha} o computer escoheu Papel, vc Ganhou!!!`)
                    }else{
                        if(escolha2 === 3 && escolhaComputer=== 1){
                            console.log(`Você escolheu ${escolha} o computer escoheu Pedra, vc Perdeu!!!`)
                           
                        }
                    }
                    }
                }
    