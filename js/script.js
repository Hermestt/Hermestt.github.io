/*
- Definir os valores min e max para o random generator
- do...while (random === getImg.last) para gerar um número aleatório dentro do loop até ser diferente ao anterior, guardando o número numa propriedade da própria função
- "apanhar" o elemento que queremos interagir e atribuir-lhe um eventListener.
- alterar o a src para um nº correspondente ao nome de uma possível imagem .png
*/
function getImg() {
    let min = 0,
        max = 4,
        random;

    do {
        random = Math.floor(Math.random() * (max - min)) + min;
    } while (random === getImg.last);
    getImg.last = random;

    let imgElement = document.querySelector('#animal-img');
    imgElement.src=`img/animals/${getImg.last}.png`;

    clearInterval(interval); //Elimina o intervalo de repetição porque presumívelmente o utilizador já clicou nos animais.
};

let animalContainer = document.querySelector('#animal');
animalContainer.addEventListener('click', getImg, false);


/**
 * Atribuir a animação ao curso num certo intervalo de tempo até o user ativar a função getIMG()
 */
let cursor = document.querySelector('#cursor');

function addTransform(){
    cursor.classList.contains('animation-cursor') ? cursor.classList.remove('animation-cursor') : cursor.classList.add('animation-cursor');
}

let interval = setInterval(addTransform, 2000);