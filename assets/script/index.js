// Pegar Botao do HTML
const botao = document.querySelectorAll('.btn');
// Pegar as Div dos Jogadores no HTML
const jogadores = document.querySelectorAll(".jogador"); 

//Adicionar "Selecionado" no Botão
botao.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //Verificar se já existe um "Selecioado"
        const botaoSelecionado = document.querySelector(".btn.selecionado");
        botaoSelecionado.classList.remove('selecionado')

        botao.classList.add('selecionado');
        
        //Verificar se já existe um "Selecioado"
        const jogadorSelecionado = document.querySelector(".jogador.selecionado");
        jogadorSelecionado.classList.remove('selecionado');

        //Adicionar a Classe Selecionado no Jogador
        jogadores[indice].classList.add('selecionado');
    });
});

