document.getElementById('mensagemBtn').addEventListener('click', function() {
    const mensagens = [
        "Você é incrível!",
        "Bem-vindo ao meu perfil!",
        "Tenha um ótimo dia!",
        "A persistência leva ao sucesso!"
    ];
    
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    document.getElementById('mensagem').innerHTML = `<p>${mensagemAleatoria}</p>`;
});