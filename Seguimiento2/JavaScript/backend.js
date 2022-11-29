const menu = document.querySelector('.menu');
const enlaces = document.querySelector('.enlaces');
const navegacion = document.querySelectorAll('.enlaces a');

console.log(navegacion);

document.addEventListener('DOMContentLoaded', ()=>{
    mostrar();
    cerrar();
});


//Contiene dicho evento ( si la barra esta dezplazada agrega una nueva clase ocultar / si no los remueve)
function mostrar () {
    menu.addEventListener('click', ()=>{
        
        if ( enlaces.classList.contains('ocultar') ) {
            enlaces.classList.remove('ocultar');
        }
        else {
            enlaces.classList.add('ocultar');
        }

    });
}



//Esta funcion sirve para cerrar el menu al momento de hacer click
function cerrar () {
    navegacion.forEach(navegaciones =>{
        navegaciones.addEventListener('click',(e)=>{
            
            if(e.target.tagName === 'A') {
                enlaces.classList.add('ocultar');
            }
        });
    });
}


//