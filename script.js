function Contar(){
    var inicio = document.getElementById('txtInicio')
    var fim = document.getElementById('txtFim')
    var passo = document.getElementById('txtPasso')
    var res = document.querySelector('div#res')
    res.innerHTML=""

    if(inicio.value == "" || fim.value == ""){
        res.innerHTML = "Impossível Contar!"
    }
    else if(passo.value < 1){
        passo.value = 1
        alert('Passo inválido! Considerando PASSO 1')
        res.innerHTML="<p>Contando:<\p>"
    }
    else if(inicio.value < fim.value){        
        //Contagem crecente       
        var limite = Number(fim.value)
        var p = Number(passo.value)
        for(var i = Number(inicio.value);i<=limite;i+=p){
            res.innerHTML += ` ${i} \u{1F449} `             
        }
        res.innerHTML+=`\u{1F3C1}`

    }else{
        //Contagem regressiva
        var limite = Number(fim.value)
        var p = Number(passo.value)
        for(var i = Number(inicio.value);i>=limite;i-=p){
            res.innerHTML += ` ${i} \u{1F449} `             
        }
        res.innerHTML+=`\u{1F3C1}`
    }
    
   
}