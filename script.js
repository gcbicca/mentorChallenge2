let selectedBall = null
var sectionContainer = document.querySelector('div.main-section__container')
var sectionContainerSecond = document.querySelector('div.main-section__containerHidden')

function selectBall(ballNumber) {
    // Essa função é passada ao clicar em uma das 5 divs, ao clicar esa recebe um valor de
    // 1 a 5 como parâmetro, após, armazena-se todas as divs com a classe.
    // depois é usado um estrutura de repetição forEach, que produz um efeito colateral e que recebe uma funçãp.
    // pra cada div com a classe ela passa uma funcao que remove a classe selected-dot.
    // após é realizado uma reatribuição a variavel selectedBall que recebe o valor passado pelo parametro que vai de 1 a 5.
    // é criado uma variavel que vai armazenar o a div que foi clicada, utilizando uma pseudo-classe, que pega todas as filhos, que possuem a mesma classe e que receberá
    // o valor que foi passado pela passagem de parâmetro e armazena qual div foi clicada e em seguida modifica sua classe para modficar o seu background.
    var balls = document.querySelectorAll('div.main-dot');

    balls.forEach(function(ball) {
        ball.classList.remove('selected-dot');
    });

    selectedBall = ballNumber
    var selectedElement = document.querySelector('div.main-dot:nth-child(' + ballNumber + ')');
    selectedElement.classList.add('selected-dot');
}


function saveAndDisplay() {
    if (selectedBall != null) {
        sectionContainer.classList.replace('main-section__container', 'main-section__containerHidden');
        sectionContainerSecond.classList.replace('main-section__containerHidden', 'main-section__containerSecond')
        document.getElementById('result').innerHTML = selectedBall
    } else {
        document.getElementById('result').innerHTML = 'error'
    }
}