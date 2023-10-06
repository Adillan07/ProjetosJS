// Obtendo referências para os elementos HTML
var campoRaio = document.getElementById('raio'), 
    campoRaioExp = document.getElementById('raioExp'), 
    campoMassa = document.getElementById('massa'), 
    campoMassaExp = document.getElementById("massaExp"), 
    res = document.getElementById('res')

// Adicionando um evento de clique ao botão com o id 'calcular'
document.getElementById('calcular').addEventListener('click',calcular)

// Função que será chamada quando o botão 'calcular' for clicado
function calcular(){
    // Constante gravitacional e obtenção de valores dos campos de entrada
    const gravitUniver = 6.67 * Math.pow(10,-11), 
          raio = (parseFloat(String(campoRaio.value).replace(",","."))) * Math.pow(10,campoRaioExp.value), 
          massa = (parseFloat(String(campoMassa.value).replace(",","."))) * Math.pow(10,campoMassaExp.value)

    // Cálculo da velocidade orbital
    let velocidade = (Math.sqrt((gravitUniver*massa)/raio)/1000).toExponential(2)
    
    // Formatação da velocidade para um formato mais legível
    velocidade = velocidade.replace(".",",")
    velocidade = velocidade.replace("e","x10")
    velocidade = velocidade.replace("+","^")
    velocidade = velocidade.replace("-","^-")
    
    // Exibindo o resultado
    res.style.display = "flex"
    if (velocidade=='NaN' && (campoRaio.value == "" || campoRaioExp.value == "" || campoMassa.value == "" || campoMassaExp.value == "")){
        res.innerHTML =`<p>Oops! Parece que ocorreu um erro. Por favor, preencha todos os campos acima</p>`
    } else if(velocidade=='NaN'){
        res.innerHTML =`<p>Oops! Parece que ocorreu um erro. Por favor, tente digitar '.' ao invés de ','</p>`
    } else{
        res.innerHTML =`<p>A velocidade orbital desse satélite é de, aproximadamente, ${velocidade} km/s</p>`
    }
}

// Função para mostrar informações na tela inicial
function mostraInfo(indice){
    let info = document.getElementById('info')
    switch(indice){
        case 1:
            // Exibindo informações sobre o exercício 1
            info.style.display = "flex"
            info.style.width = "30%"
            info.style.height = "auto"
            info.innerHTML = `<p>➡Neste exercício, você deverá programar um sistema que calcule a velocidade orbital de um satélite. Para isso, o usuário deverá inserir o raio (distância do satélite ao centro do planeta, em metros) e a massa do planeta (em quilogramas), e o programa deverá aplicar a fórmula v=√[(G⋅M)/r] e exibir o resultado para o usuário (em km/s).</p><br><p>➡Considere G=6,67⋅10⁻¹¹m³kg⁻¹s⁻² e utilize a biblioteca Math do JavaScript para fazer as operações de exponenciação e radiciação.</p>`
            break
        case 2:
            // Exibindo informações sobre o exercício 2
            info.style.display = "flex"
            info.style.width = "30%"
            info.style.height = "auto"
            info.innerHTML = `<p>➡Neste exercício, você deverá programar um sistema que mostra o signo do usuário, baseando-se em sua data de nascimento. Para isso, o usuário deverá inserir o dia e mês em que nasceu, e o programa deverá identificar qual é o signo válido para esse dia.</p><br><p>➡Utilize listas e dicionários para definir os períodos de cada signo, o objeto Date() do JavaScript para analisar a data inserida e estruturas condicionais para verificar o signo do usuário.</p>`
            break
        case 3:
            // Exibindo informações sobre o exercício 3
            info.style.display = "flex"
            info.style.width = "30%"
            info.style.height = "auto"
            info.innerHTML = `<p>➡Neste exercício, você deverá programar um sistema que converte o horário atual para um dos outros 25 fusos horários principais do mundo. Para isso, o usuário deverá selecionar o fuso horário para o qual ele quer que o horário seja convertido, e o programa deverá pegar o horário atual do sistema do usuário e convertê-lo para o fuso horário escolhido.</p><br><p>➡Utilize o objeto Date() do JavaScript para pegar a hora atual e estruturas de repetição para convertê-la de acordo com o fuso horário escolhido.  Atente-se: o fuso horário de Brasília é UTC-3, utilize-o como base para seus cálculos.</p>`
            break
    }
}