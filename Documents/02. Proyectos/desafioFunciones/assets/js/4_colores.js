const divs= document.querySelectorAll('.container');

const colorearNegro= function(){
    this.style.backgroundColor= 'black';
    this.style.color= 'white';
}

divs.forEach(function(div) {
    div.addEventListener("click", colorearNegro);
});


