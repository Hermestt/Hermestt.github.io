function changeImg(){
    let el = document.getElementById('animal-img');
    console.log("childEl: "+el);
    let num = Math.floor(Math.random() * 3);
    console.log("num: "+num);
    el.src=`img/animals/${num}.png`;
};


let el = document.getElementById('animal');
el.addEventListener('click', function(e){
    changeImg(e)}, false);

changeImg()