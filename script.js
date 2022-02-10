const visor_inferior = document.querySelector('div.visor-inferior')
const visor_superior = document.querySelector('div.visor-superior')
visor_inferior.innerHTML = "";
visor_superior.innerHTML = "";

let digito = null;
function verif_tela(elemento){
    if(elemento == null || elemento == ""){
        return true//não foi digitado nada ainda
    }
    else{
        return false//já tem digitos guardados
    }
}
function inserir(parametro){
    switch(parametro){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '%':
        case '.':
        case '+':
        case '-':
        case '÷':
        case 'x':
            verif_tela(digito)?digito = parametro: digito = digito + parametro;
            visor_inferior.innerHTML = digito
            break;
        case 'del':
            if(verif_tela(digito) && visor_superior.innerHTML == ""){
                window.alert('Não há número para apagar')
            }
            else if(visor_superior.innerHTML != ""){//caso alguem pense que o DEL tem a mesma função do C
                visor_inferior.innerHTML = "";
                visor_superior.innerHTML = "";
            }
            else{
                digito = digito.slice(0, -1);
            }
            visor_inferior.innerHTML = digito
            break
        case 'C':
            visor_inferior.innerHTML = "";
            visor_superior.innerHTML = "";
            digito = null
            break
        case '=':
            let acao = null;
            let acao2 = null;
            let primeirosNumeros = "", restoNumeros = "";
            for(let i = 0; i < digito.length; i++){//loop para a verificação da variável ACAO e DIGITO
                if(acao == null || acao2 == null){//se a ACAO ou ACAO2 ainda não foram encontradas nos DIGITO faça:
                    if(isNaN(digito[i]) == false || digito[i] == '.'){//verificar se o digito da posicao [i] é um número ou um ponto
                        if(acao == null){//ver se ACAO ainda não foi preenchida
                            verif_tela(primeirosNumeros)? primeirosNumeros = digito[i] : primeirosNumeros += digito[i]
                            //ACAO não preenchida. Primeiros números que estão sendo digitados são guardados em PRIMEIROSNUMEROS
                        }
                        else{//ACAO já foi preenchida
                            verif_tela(restoNumeros)? restoNumeros = digito[i] : restoNumeros += digito[i]
                            //guardar o resto dos números digitados
                        }
                    }
                    else{
                        acao == null? acao = digito[i] : acao2 = digito[i]//teste para atribuição das operações
                    }
                }
            }
            //transformando de String para números
            primeirosNumeros = Number(primeirosNumeros)
            restoNumeros = Number(restoNumeros)

            function formatacao_operacoes(){//mostra na tela a operação desejada
                if(acao2 == null){
                    visor_superior.innerHTML = String(primeirosNumeros) + acao + String(restoNumeros)//mostra a operação no visor de cima
                }
                else{
                    visor_superior.innerHTML = String(primeirosNumeros) + acao + String(restoNumeros) + acao2//mostra a operação no visor de cima
                }
                digito = null//zera os digitos
            }

            if(acao != null && acao2 == null){// so foi resgistrada somente uma ação
                switch(acao){
                    case '%':
                        formatacao_operacoes()
                        visor_inferior.innerHTML = (primeirosNumeros*restoNumeros)/100//mostra o resultado no visor de baixo
                        break
                    case '.':
                        digito = digito + '.'
                        break
                    case '+':
                        formatacao_operacoes()
                        visor_inferior.innerHTML = primeirosNumeros+restoNumeros
                        break
                    case '-':
                        formatacao_operacoes()
                        visor_inferior.innerHTML = primeirosNumeros-restoNumeros
                        break
                    case '÷':
                        formatacao_operacoes()
                        visor_superior.innerHTML = String(primeirosNumeros) + acao + String(restoNumeros)
                        visor_inferior.innerHTML = primeirosNumeros/restoNumeros
                        break
                    case 'x':
                        formatacao_operacoes()
                        visor_inferior.innerHTML = primeirosNumeros*restoNumeros
                        break
                }
            }
            else{//tem duas ações registradas
                switch(acao2){
                    case '%':
                        let porcentagem = "", resultado = "";
                        switch(acao){
                            case '-':
                                formatacao_operacoes()
                                porcentagem = (primeirosNumeros*restoNumeros)/100
                                resultado = primeirosNumeros - porcentagem
                                visor_inferior.innerHTML = resultado//mostra o resultado no visor de baixo
                                break
                            case '+':
                                formatacao_operacoes()
                                porcentagem = (primeirosNumeros*restoNumeros)/100
                                resultado = primeirosNumeros + porcentagem
                                visor_inferior.innerHTML = resultado//mostra o resultado no visor de baixo
                                break
                        }
                        break
                }
            }
    }
}