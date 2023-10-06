function calcular() {
    // Cria uma data com o módulo DATE utilizando o valor que o usuário inserir no input
    const data = new Date(document.getElementById('data').value)
    // Obtém o dia e o mês dessa data
    const dia = data.getDate()
    const mes = data.getMonth()
    // Cria uma nova data utilizando um ano fixo (2023) e adiciona mais 1 no mes, pois a contagem desse elemento se inicia em 0
    const nova_data = new Date(2023, mes+1, dia)


    const res = document.getElementById('res')
    const foto = document.getElementById('foto')
    const cavaleiro = document.getElementById('cavaleiro')
    const figura = document.getElementById('figura')

    // Realiza a verificação criando um range entre as datas e então definir o signo
    if(nova_data >= new Date(2023, 3, 21) && nova_data <= new Date(2023, 4, 20)) {
        // altera os elemtentos html correspondente de acordo com o resultado
        res.innerText = 'Você é Aries!'
        foto.src = 'https://i.pinimg.com/564x/34/07/75/34077507097cdec7a5054ae22d83a669.jpg'
        cavaleiro.innerText = 'Seu Cavaleiro de Ouro Mu de Áries!'
        figura.style.display = 'flex'
        figura.style.margin = '0 0 0 15%'
    } else if(nova_data >= new Date(2023, 4, 21) && nova_data <= new Date(2023, 5, 20)) {
        res.innerText = 'Você é Touro!'
        foto.src = 'https://i.pinimg.com/564x/08/fd/24/08fd24aa5b60327e9deafe44a0e90bb0.jpg'
        cavaleiro.innerText = 'Seu Cavaleiro de Ouro é Aldebaran de Touro!'
        figura.style.display = 'flex'
        figura.style.margin = '0 0 0 15%'
    } else if(nova_data >= new Date(2023, 5, 21) && nova_data <= new Date(2023, 6, 20)) {
        res.innerText = 'Você é Gêmeos!'
        foto.src = 'https://i.pinimg.com/564x/ba/88/2a/ba882a9fa994fe50fa8079b96921e62f.jpg'
        cavaleiro.innerText = 'Seu Cavaleiro de Ouro é Saga de Gêmeos!'
        figura.style.display = 'flex'
        figura.style.margin = '0 0 0 15%'
    } else if(nova_data >= new Date(2023, 6, 21) && nova_data <= new Date(2023, 7, 21)) {
        res.innerText = 'Você é Câncer!'
        foto.src = 'https://i.pinimg.com/564x/7d/1f/19/7d1f196f34831deba08086d062b71ee0.jpg'
        cavaleiro.innerText = 'Seu Cavaleiro de Ouro é Máscara da Morte de Câncer!'
        figura.style.display = 'flex'
        figura.style.margin = '0 0 0 15%'
    } else if(nova_data >= new Date(2023, 7, 22) && nova_data <= new Date(2023, 8, 22)) {
        res.innerText = 'Você é Leão!'
        foto.src = 'https://i.pinimg.com/564x/9e/40/cb/9e40cb213df432d858c9bd0c4ae978c6.jpg'
        cavaleiro.innerText = 'Seu Cavaleiro de Ouro é Aiolia de Leão!'
        figura.style.display = 'flex'
        figura.style.margin = '0 0 0 15%'
    } else if(nova_data >= new Date(2023, 8, 23) && nova_data <= new Date(2023, 9, 22)) {
        res.innerText = 'Você é Virgem!'
        foto.src = 'https://i.pinimg.com/564x/b0/de/54/b0de54d6810aa76d0ad4d6088f0315b1.jpg'
        cavaleiro.innerText = 'Seu Cavaleiro de Ouro é Shaka de Virgem!'
        figura.style.display = 'flex'
        figura.style.margin = '0 0 0 15%'
    } else if(nova_data >= new Date(2023, 9, 23) && nova_data <= new Date(2023, 10, 22)) {
        res.innerText = 'Você é Libra!'
        foto.src = 'https://i.pinimg.com/564x/73/0d/84/730d84656bb7fda48cb08416dee717a5.jpg'
        cavaleiro.innerText = 'Seu Cavaleiro de Ouro é Dohko de Libra!'
        figura.style.display = 'flex'
        figura.style.margin = '0 0 0 15%'
    } else if(nova_data >= new Date(2023, 10, 23) && nova_data <= new Date(2023, 11, 21)) {
        res.innerText = 'Você é Escorpião!'
        foto.src = 'https://i.pinimg.com/564x/14/75/70/147570d2de9f489e7e9889c6b6932d9f.jpg'
        cavaleiro.innerText = 'Seu Cavaleiro de Ouro é Milo de Escorpião!'
        figura.style.display = 'flex'
        figura.style.margin = '0 0 0 15%'
    } else if(nova_data >= new Date(2023, 11, 22) && nova_data <= new Date(2023, 12, 21)) {
        res.innerText = 'Você é Sagitário!'
        foto.src = 'https://i.pinimg.com/564x/fb/72/e3/fb72e38a6a87a34bf20e2ce6bd67f45a.jpg'
        cavaleiro.innerText = 'Seu Cavaleiro de Ouro é Aiolos de Sagitário!'
        figura.style.display = 'flex'
        figura.style.margin = '0 0 0 15%'
    } else if((nova_data >= new Date(2023, 12, 22) && nova_data <= new Date(2023, 12, 31))  || (nova_data >= new Date(2023, 1, 1) && nova_data <= new Date(2023, 1, 20))) {
        res.innerText = 'Você é Capricórnio!'
        foto.src = 'https://i.pinimg.com/564x/d8/1d/34/d81d34de449173fef63c7cc8cbfc0243.jpg'
        cavaleiro.innerText = 'Seu Cavaleiro de Ouro é Shura de Capricórnio!'
        figura.style.display = 'flex'
        figura.style.margin = '0 0 0 15%'
    } else if(nova_data >= new Date(2023, 1, 21) && nova_data <= new Date(2023, 2, 19)) {
        res.innerText = 'Você é Aquário!'
        foto.src = 'https://i.pinimg.com/564x/2f/7c/89/2f7c89ed06a515c4b5a47f4f6d274e4b.jpg'
        cavaleiro.innerText = 'Seu Cavaleiro de Ouro é Camus de Aquário!'
        figura.style.display = 'flex'
        figura.style.margin = '0 0 0 15%'
    } else if(nova_data >= new Date(2023, 2, 20) && nova_data <= new Date(2023, 3, 20)) {
        res.innerText = 'Você é Peixes!'
        foto.src = 'https://i.pinimg.com/564x/e5/22/9e/e5229e1878b5af93e8b00d86cf6e444e.jpg'
        cavaleiro.innerText = 'Seu Cavaleiro de Ouro é Afrodite de Peixes!'
        figura.style.display = 'flex'
        figura.style.margin = '0 0 0 15%'
    }
}