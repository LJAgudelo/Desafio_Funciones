const elemento1= document.querySelector('#elemento1');

const pintar= function(color='green'){
    elemento1.style.backgroundColor = color;
}
pintar();
elemento1.addEventListener("click", function(){
    pintar('yellow');
})

