const input = document.getElementById('input');
const boton = document.getElementById('boton');
const tareas = document.getElementById('tareas');

boton.addEventListener('click', () => {
    const texto = input.value;

    if(input.value){
        //vamos agregar elementos al dom 
    tareas.innerHTML += `<div class="h3 text-primary card p-2">${texto}<br><button class="btn btn-danger">Eliminar</button></div>`;
    }
});

//el evento eliminar
document.addEventListener('click', (e) =>{
    if(e.target.parentElement.className == 'h3 text-primary card p-2'){
        e.target.parentElement.remove();
    }
})


/* 
utiliza js y bootstrap... basico  
link de video https://www.youtube.com/watch?v=QZeUUqyFemM
*/
