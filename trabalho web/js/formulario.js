// Seleciona os elementos da imagem e da mensagem
var foto = document.getElementById("mensagemfoto");
var mensagem = document.getElementById("mensagem");

// Quando o mouse passar sobre a imagem, exibir a mensagem
foto.onmouseover = function()  {
    mensagem.style.display = "block";
};

// Quando o mouse sair da imagem, esconder a mensagem
foto.onmouseout = function() {
    mensagem.style.display = "none";
};

// Pega os elementos do formulário pelo ID
const form = document.querySelector('form');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const celularInput = document.getElementById('celular');
const mensagemInput = document.getElementById('menssagem');

// Adiciona um evento para quando o formulário for enviado
form.addEventListener('submit', function (event) {
    // Impede que o formulário seja enviado sem validação
    event.preventDefault();

    // Verifica se o nome está correto
    if (!checarNome(nomeInput.value)) {
        alert('Por favor, escreva um nome válido (apenas letras).');
        nomeInput.focus(); // Foca no campo nome
        return;
    }

    // Verifica se o e-mail está no formato certo
    if (!checarEmail(emailInput.value)) {
        alert('Por favor, insira um e-mail válido.');
        emailInput.focus(); // Foca no campo e-mail
        return;
    }

    // Verifica se o celular tem só números e é válido
    if (!checarCelular(celularInput.value)) {
        alert('Por favor, insira um número de celular válido (apenas números, com 10 ou 11 dígitos).');
        celularInput.focus(); // Foca no campo celular
        return;
    }

    // Verifica se a mensagem não está vazia
    if (mensagemInput.value.trim() === '') {
        alert('Por favor, escreva sua mensagem antes de enviar.');
        mensagemInput.focus(); // Foca no campo mensagem
        return;
    }

    // Se tudo estiver correto, mostra mensagem de sucesso
    alert('Obrigado por entrar em contato! Sua mensagem foi enviada com sucesso.');
    form.reset(); // Limpa os campos do formulário
});

// Função para verificar o nome
function checarNome(nome) {
    // Verifica se o nome tem apenas letras e espaços
    return /^[a-zA-Z\s]+$/.test(nome);
}

// Função para verificar o e-mail
function checarEmail(email) {
    // Verifica se o e-mail segue um formato básico válido
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Função para verificar o celular
function checarCelular(celular) {
    // Verifica se o celular tem só números e entre 10 a 11 dígitos
    return /^\d{10,11}$/.test(celular);
}

// Adiciona destaque ao focar nos campos
document.querySelectorAll('input, textarea').forEach((campo) => {
    // Quando o campo recebe o foco
    campo.addEventListener('focus', function  () {
        campo.style.border = '3px solid #c90d94'; // Muda a borda
    });

    // Quando o campo perde o foco
    campo.addEventListener('blur', function () {
        campo.style.border = '1px solid #ccc'; // Volta à borda original
    });
});