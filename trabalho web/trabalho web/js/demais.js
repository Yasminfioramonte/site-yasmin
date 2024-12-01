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
