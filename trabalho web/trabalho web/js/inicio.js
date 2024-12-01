// Seleciona os elementos da imagem e da mensagem
var foto = document.getElementById("mensagemfoto");
var mensagem = document.getElementById("mensagem");

//  Exibir a mensagem quando o mouse passar sobre a imagem
foto.onmouseover = function()  {
    mensagem.style.display = "block";
};

//  Esconder a mensagem quando o mouse sair da imagem
foto.onmouseout = function() {
    mensagem.style.display = "none";
};

// Exibe um alerta assim que o site carrega
window.addEventListener("load", function() {
    alert("Bem-vindo ao  meu portfólio!");
});

// Exibe um alerta quando o usuário clica na foto
foto.addEventListener("click", function() {
    alert("Esta é uma  foto minha!");
});