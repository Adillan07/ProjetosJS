function dataHoraAtuais(){
    const data_hora = document.getElementById('mostraHora'), dataAtual = new Date(), dia = dataAtual.toLocaleDateString(), horas = dataAtual.toLocaleTimeString();
    data_hora.innerHTML=`<p>${dia}  -  ${horas}</p>`
}
setInterval(dataHoraAtuais,1000);
function mudaFoto(item){
    let foto = document.getElementById('foto')
    foto.src = item
}

function calcular(){
    const salario = document.getElementById('salario')
    let dias_uteis = document.getElementById('dias_uteis'), fim_semana = document.getElementById('fim_semana'), res = document.getElementById('res')
    let he_dias_uteis = (parseFloat(salario.value) / 200) * Number(dias_uteis.value), he_fim_semana = ((parseFloat(salario.value) / 200) * Number(fim_semana.value)) * 1.5, horas_extras = he_dias_uteis + he_fim_semana, total = horas_extras + parseFloat(salario.value)

    he_dias_uteis = he_dias_uteis.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    he_fim_semana = he_fim_semana.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    horas_extras = horas_extras.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    total = total.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    res.style.display = "flex"
    res.innerHTML =`<p>→Você receberá ${he_dias_uteis} pelas horas extras trabalhadas nos dias úteis;</p><p>→Você receberá ${he_fim_semana} pelas horas extras trabalhadas nos fins de semana;</p><p>→Você receberá ${horas_extras} de horas extras;</p><p>→Contando com as horas extras, seu salário será de ${total};</p>`
}

function aumento(){
    let salario = document.getElementById('salario'), res = document.getElementById('res')
    salario = parseFloat(salario.value)
    if (salario <= 1200){
        novo_sal = salario * 1.16
    } else if(salario <= 2100){
        novo_sal = salario * 1.13
    } else if(salario <= 3000){
        novo_sal = salario * 1.1
    } else{
        novo_sal = salario * 1.05
    }
    novo_sal = novo_sal.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    res.style.display = "flex"
    res.innerHTML = `<p>Seu novo salário, considerando o aumento, será de ${novo_sal}</p>`
}

function custo_mensal(){
    let dias_uteis = document.getElementById('dias_uteis'), res = document.getElementById('res')
    pessoas = parseInt(pessoas.value)
    dias = parseInt(dias_uteis.value)
    if (pessoas < 0){
        res.innerHTML = `Quantidade de pessoas inválida!`
    } else if(pessoas <= 49){
        prec = 4.5 * pessoas * dias
        prec = prec.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
        res.style.display = "flex" 
        res.innerHTML = `O custo mensal do transporte dos colaboradores será de ${prec}`
    } else if(pessoas <= 99){
        prec = 4.1 * pessoas * dias
        prec = prec.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
        res.style.display = "flex" 
        res.innerHTML = `O custo mensal do transporte dos colaboradores será de ${prec}`
    } else if(pessoas <= 149){
        prec = 3.8 * pessoas * dias
        prec = prec.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
        res.style.display = "flex" 
        res.innerHTML = `O custo mensal do transporte dos colaboradores será de ${prec}`
    } else{
        prec = 3.6 * pessoas * dias
        prec = prec.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
        res.style.display = "flex" 
        res.innerHTML = `O custo mensal do transporte dos colaboradores será de ${prec}`
    }
}
