document.querySelector("#parcela1").addEventListener('change', atualizarSoma)
document.querySelector("#parcela1").addEventListener('input', atualizarSoma)
document.querySelector("#parcela2").addEventListener('change', atualizarSoma)
document.querySelector("#parcela1").addEventListener('input', atualizarSoma)
document.querySelector("#total").addEventListener('change', atualizarSoma)
console.log(process.env.TESTE)
function atualizarSoma(){
    let parcela1 = document.querySelector("#parcela1").value
    let parcela2 = document.querySelector("#parcela2").value
    if(parcela1 && parcela2){
        let total = document.querySelector("#total")
        total.value = parseInt(parcela1) + parseInt(parcela2)
    }
}

document.querySelector("#minuendo").addEventListener('change', atualizarSubtracao)
document.querySelector("#minuendo").addEventListener('input', atualizarSubtracao)
document.querySelector("#subtraendo").addEventListener('change', atualizarSubtracao)
document.querySelector("#subtraendo").addEventListener('input', atualizarSubtracao)
document.querySelector("#diferenca").addEventListener('change', atualizarSubtracao)

function atualizarSubtracao(){
    let minuendo = document.querySelector("#minuendo").value
    let subtraendo = document.querySelector("#subtraendo").value
    if(minuendo && subtraendo){
        let diferenca = document.querySelector("#diferenca")
        diferenca.value = parseInt(minuendo) - parseInt(subtraendo)
    }
}

document.querySelector("#fator1").addEventListener('change', atualizarMultiplicacao)
document.querySelector("#fator1").addEventListener('input', atualizarMultiplicacao)
document.querySelector("#fator2").addEventListener('change', atualizarMultiplicacao)
document.querySelector("#fator2").addEventListener('input', atualizarMultiplicacao)
document.querySelector("#produto").addEventListener('change', atualizarMultiplicacao)

function atualizarMultiplicacao(){
    let fator1 = document.querySelector("#fator1").value
    let fator2 = document.querySelector("#fator2").value
    if(fator1 && fator2){
        let produto = document.querySelector("#produto")
        produto.value = parseInt(fator1) * parseInt(fator2)
    }
}

document.querySelector("#dividendo").addEventListener('change', atualizarDivisao)
document.querySelector("#dividendo").addEventListener('input', atualizarDivisao)
document.querySelector("#divisor").addEventListener('change', atualizarDivisao)
document.querySelector("#divisor").addEventListener('input', atualizarDivisao)
document.querySelector("#quociente").addEventListener('change', atualizarDivisao)
document.querySelector("#resto").addEventListener('change', atualizarDivisao)

function atualizarDivisao(){
    let dividendo = document.querySelector("#dividendo").value
    let divisor = document.querySelector("#divisor").value
    if(dividendo && divisor){
        let quociente = document.querySelector("#quociente")
        quociente.value = Math.trunc((parseInt(dividendo) / parseInt(divisor)))
        let resto = document.querySelector('#resto')
        resto.value = (parseInt(dividendo) % parseInt(divisor))
    }
}

document.querySelector(".soma").addEventListener("click", callSoma)
document.querySelector(".subtracao").addEventListener("click", callSub)
document.querySelector(".multiplicacao").addEventListener("click", callMult)
document.querySelector(".divisao").addEventListener("click", callDivi)

function callSoma(){
    document.querySelector(".calculo-soma").style.display="flex"
    document.querySelector(".soma").style.background="#0E9797"
    document.querySelector(".fa-plus").style.color="#00ffff"
    document.querySelector(".calculo-sub").style.display="none"
    document.querySelector(".subtracao").style.background="#398282"
    document.querySelector(".fa-minus").style.color="white"
    document.querySelector(".calculo-mult").style.display="none"
    document.querySelector(".multiplicacao").style.background="#398282"
    document.querySelector(".fa-times").style.color="white"
    document.querySelector(".calculo-divi").style.display="none"
    document.querySelector(".divisao").style.background="#398282"
    document.querySelector(".fa-divide").style.color="white"   
}

function callSub(){
    document.querySelector(".calculo-soma").style.display="none"
    document.querySelector(".soma").style.background="#398282"
    document.querySelector(".fa-plus").style.color="white"
    document.querySelector(".calculo-sub").style.display="flex"
    document.querySelector(".subtracao").style.background="#0E9797"
    document.querySelector(".fa-minus").style.color="#00ffff"
    document.querySelector(".calculo-mult").style.display="none"
    document.querySelector(".multiplicacao").style.background="#398282"
    document.querySelector(".fa-times").style.color="white"
    document.querySelector(".calculo-divi").style.display="none"
    document.querySelector(".divisao").style.background="#398282"
    document.querySelector(".fa-divide").style.color="white"     
}

function callMult(){
    document.querySelector(".calculo-soma").style.display="none"
    document.querySelector(".soma").style.background="#398282"
    document.querySelector(".fa-plus").style.color="white"
    document.querySelector(".calculo-sub").style.display="none"
    document.querySelector(".subtracao").style.background="#398282"
    document.querySelector(".fa-minus").style.color="white"
    document.querySelector(".calculo-mult").style.display="flex"
    document.querySelector(".multiplicacao").style.background="#0E9797"
    document.querySelector(".fa-times").style.color="#00ffff"
    document.querySelector(".calculo-divi").style.display="none"
    document.querySelector(".divisao").style.background="#398282"
    document.querySelector(".fa-divide").style.color="white"   
}

function callDivi(){
    document.querySelector(".calculo-soma").style.display="none"
    document.querySelector(".soma").style.background="#398282"
    document.querySelector(".fa-plus").style.color="white"
    document.querySelector(".calculo-sub").style.display="none"
    document.querySelector(".subtracao").style.background="#398282"
    document.querySelector(".fa-minus").style.color="white"
    document.querySelector(".calculo-mult").style.display="none"
    document.querySelector(".multiplicacao").style.background="#398282"
    document.querySelector(".fa-times").style.color="white"
    document.querySelector(".calculo-divi").style.display="flex"
    document.querySelector(".divisao").style.background="#0E9797"
    document.querySelector(".fa-divide").style.color="#00ffff"   
}

