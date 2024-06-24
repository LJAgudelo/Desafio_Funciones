
const fondo = document.querySelector('body').style.background='LightCoral';
const campo = document.querySelector('#campo');
campo.style.border = '2px solid red';

const campo2 = document.querySelector('#campo2');
campo2.style.border = '2px solid blue';

document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        pintar(campo, 'pink');
    } else if (event.key === 's') {
        pintar(campo, 'orange');
    } else if (event.key === 'd') {
        pintar(campo, 'lightblue');
    } else if (event.key === 'q') {
        agregarElemento();
        pintar(campo2, 'purple');
  
    } else if (event.key === 'w') {
        agregarElemento();
        pintar(campo2, 'gray');
        
    } else if (event.key === 'e') {
        agregarElemento(); 
        pintar(campo2, 'brown');
        
    }
});

function pintar(elemento, color) {
    elemento.style.backgroundColor = color;
}

function agregarElemento() {
    // Crear el nuevo elemento contenedor
    let nuevoContenedor = document.createElement("div");
    
    // Asignar un estilo al nuevo contenedor 
    nuevoContenedor.style.border = '2px solid black ';
    nuevoContenedor.style.width= '300px';
    nuevoContenedor.style.height= '200px';
    
    
    // Agregar el nuevo contenedor a campo2
    campo2.appendChild(nuevoContenedor);
}