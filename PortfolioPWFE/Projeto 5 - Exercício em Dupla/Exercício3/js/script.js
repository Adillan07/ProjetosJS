// Função que atualiza a data e hora atuais na página
function dataHoraAtuais(){
    const data_hora = document.getElementById('mostraHora'), // Obtém o elemento HTML com id 'mostraHora'
          dataAtual = new Date(), // Cria um novo objeto de data representando o momento atual
          dia = dataAtual.toLocaleDateString(), // Obtém a data atual no formato local
          horas = dataAtual.toLocaleTimeString(); // Obtém a hora atual no formato local

    // Atualiza o conteúdo do elemento com a data e hora
    data_hora.innerHTML=`<p>${dia}  -  ${horas}</p>`
}

// A função dataHoraAtuais será chamada a cada 1000 milissegundos (1 segundo)
setInterval(dataHoraAtuais,1000);

// Função que retorna o fuso horário escolhido pelo usuário
function fusoEscolhido(){
    var fusos = [];
    var fusos_horarios = document.getElementsByName('fusoHorario'), escolha = ""
    for (let i in fusos_horarios){
        if ( fusos_horarios[i].checked ) {
            fusos.push(fusos_horarios[i].value);
            escolha = fusos[0]
            return escolha
        }
    }
}

// Função que formata a hora de acordo com o fuso horário escolhido
function formataHora(minutoAtual, horaConvertida, dia, mes, ano){
    // Lógica para corrigir valores de hora, dia, mês e ano conforme necessário
    if(horaConvertida<0){
        horaConvertida+=24
        dia = dia - 1
    } else if(horaConvertida>=24){
        horaConvertida-=24
        dia = dia + 1
    }
    if (horaConvertida<10){
        horaConvertida = "0"+horaConvertida
    }
    if (minutoAtual<10){
        minutoAtual = "0"+minutoAtual
    }
    if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10) && (dia>31)){
        dia = 1
        mes = mes + 1
    } else if (mes == 12 && dia>31){
        dia = 1
        mes = 1
        ano = ano + 1
    }else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
        dia = 1
        mes = mes + 1
    } else if (mes == 2 && dia>28){
        dia = 1
        mes = mes + 1
    } else if ((mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia==0)){
        dia = 30
        mes = mes - 1
    } else if ((mes == 2 || mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia==0)){
        dia = 31
        mes = mes - 1
    } else if (mes == 1 && dia==0){
        dia = 31
        mes = 12
        ano = ano - 1 
    }
    if (dia<10){
        dia = "0"+dia
    }
    if (mes<10){
        mes = "0"+mes
    }
    // Formata a hora e a data
    hora = horaConvertida+":"+minutoAtual
    hoje = dia + "/" + mes + "/" + ano
    res.style.display = "flex"
    return (hora,hoje) // Retorna a hora e a data formatadas
}

// Função que converte a hora de acordo com o fuso horário escolhido
function converter(){
    const dataAtual = new Date(), // Obtém a data atual
          horaAtual = dataAtual.getHours(), // Obtém a hora atual
          minutoAtual = dataAtual.getMinutes(), // Obtém os minutos atuais
          res = document.getElementById("res") // Obtém o elemento HTML com id 'res'
    var horaConvertida = horaAtual, // Inicializa a hora convertida como a hora atual
        dia = dataAtual.getDate(), // Obtém o dia atual
        mes = dataAtual.getMonth()+1, // Obtém o mês atual (os meses são indexados de 0 a 11)
        ano = dataAtual.getFullYear() // Obtém o ano atual

    // Chama a função fusoEscolhido para obter o fuso horário escolhido pelo usuário
    switch(fusoEscolhido()){
        // Para cada fuso horário, realiza a conversão de hora e atualiza o conteúdo na página
        case 'utc-12':
            horaConvertida = horaAtual - 9
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} em Baker Island, EUA (UTC-12)!</p>`
            break
        case 'utc-11':
            horaConvertida = horaAtual - 8
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} em Niue (UTC-11)!</p>`
            break
        case 'utc-10':
            horaConvertida = horaAtual - 7
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} no Havaí (UTC-10)!</p>`
            break
        case 'utc-09':
            horaConvertida = horaAtual - 6
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} no Alasca, Eua (UTC-09)!</p>`
            break
        case 'utc-08':
            horaConvertida = horaAtual - 5
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} em Tijuana, México (UTC-08)!</p>`
            break
        case 'utc-07':
            horaConvertida = horaAtual - 4
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} no Colorado, Arizona, EUA (UTC-07)!</p>`
            break
        case 'utc-06':
            horaConvertida = horaAtual - 3
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} em El Salvador (UTC-06)!</p>`
            break
        case 'utc-05':
            horaConvertida = horaAtual - 2
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} na Colômbia (UTC-05)!</p>`
            break
        case 'utc-04':
            horaConvertida = horaAtual - 1
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} na Colômbia (UTC-04)!</p>`
            break
        case 'utc-03':
            horaConvertida = horaAtual
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">${horaConvertida}:${minutoAtual} - Esse é o horário de Brasília (UTC-03)!</p>`
            break
        case 'utc-02':
            horaConvertida = horaAtual + 1
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} em Nuuk, Groenlândia (UTC-02)!</p>`
            break
        case 'utc-01':
            horaConvertida = horaAtual + 2
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} em Scoresbysund, Groenlândia (UTC-01)!</p>`
            break
        case 'utc±00':
            horaConvertida = horaAtual + 3
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} em Ilhas Canárias, Espanha (UTC±00)!</p>`
            break
        case 'utc+01':
            horaConvertida = horaAtual + 4
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} na Europa Central (UTC+01)!</p>`
            break
        case 'utc+02':
            horaConvertida = horaAtual + 5
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} no Leste Europeu (UTC+02)!</p>`
            break
        case 'utc+03':
            horaConvertida = horaAtual + 6
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} em Moscou, Volgograd, Rússia (UTC+03)!</p>`
            break
        case 'utc+04':
            horaConvertida = horaAtual + 7
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} no Azerbaijão (UTC+04)!</p>`
            break
        case 'utc+05':
            horaConvertida = horaAtual + 8
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} no Paquistão (UTC+05)!</p>`
            break
        case 'utc+06':
            horaConvertida = horaAtual + 9
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} em Bangladesh (UTC+06)!</p>`
            break
        case 'utc+07':
            horaConvertida = horaAtual + 10
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} na Tailândia (UTC+07)!</p>`
            break
        case 'utc+08':
            horaConvertida = horaAtual + 11
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} na Austrália Ocidental (UTC+08)!</p>`
            break
        case 'utc+09':
            horaConvertida = horaAtual + 12
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} no Japão (UTC+09)!</p>`
            break
        case 'utc+10':
            horaConvertida = horaAtual + 13
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} na Papua Nova Guiné (UTC+10)!</p>`
            break
        case 'utc+11':
            horaConvertida = horaAtual + 14
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} nas Ilhas Salomão (UTC+11)!</p>`
            break 
        default:
            horaConvertida = horaAtual + 15
            formataHora(minutoAtual,horaConvertida,dia,mes,ano)
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${hora} - ${hoje} no Fiji (UTC+12)!</p>`
            break 

    }
}