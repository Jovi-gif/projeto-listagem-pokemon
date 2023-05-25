const botaoAlterarTema = document.getElementById("btn-alterar-tema");
const body = document.querySelector("body")
const imagemBotaoTrocaDeTema = document.querySelector(".img-btn")

botaoAlterarTema.addEventListener("click", () => {
    
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro");

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imgs/sun.png");
    } else {
        body.classList.add("modo-escuro");

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imgs/moon.png");
    }
    
    

});