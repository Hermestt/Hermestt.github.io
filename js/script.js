/*
- Definir os valores min e max para o random generator
- do...while (random === getImg.last) para gerar um número aleatório dentro do loop até ser diferente ao anterior, guardando o número numa propriedade da própria função
- "apanhar" o elemento que queremos interagir e atribuir-lhe um eventListener.
- alterar o a src para um nº correspondente ao nome de uma possível imagem .png
*/
function getImg() {
    let min = 0,
        max = 5,
        random;

    do {
        random = Math.floor(Math.random() * (max - min)) + min;
    } while (random === getImg.last);
    getImg.last = random;

    let el = document.querySelector('#animal-img');
    el.src=`img/animals/${getImg.last}.png`;

    clearInterval(interval);
};

let el = document.querySelector('#animal');
el.addEventListener('click', getImg, false);


/**
 * Atribuir a animação ao curso num certo intervalo de tempo até o user ativar a função getIMG()
 */
let we = document.querySelector('#cursor');

function addTransform(){
    we.classList.contains('animation-cursor') ? we.classList.remove('animation-cursor') : we.classList.add('animation-cursor');
    /*
    if (we.classList.contains('animation-cursor')){
        we.classList.remove('animation-cursor');
    } else {
        we.classList.add('animation-cursor');
    } */   
}

let interval = setInterval(addTransform, 2000);