//Função para alterar o status do jogo.
function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomejogo = gameClicado.querySelector('.dashboard__item__name');

    alert(nomejogo.textContent);
}