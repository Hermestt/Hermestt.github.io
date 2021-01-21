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

    let el = document.getElementById('animal-img');
    el.src=`img/animals/${getImg.last}.png`;
};

let el = document.getElementById('animal');
el.addEventListener('click', getImg, false);

getImg();