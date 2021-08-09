$("#text").fadeIn(5000);


const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

// Cuando Click en un punto 
// Saber la posicion de ese punto
// Aplicar un transform translateX al grande
// Quitar la clase activo de Todos los puntos
//  Añadir la clase activo al punto que hemos hecho Click

punto.forEach( ( cadaPunto , i) => {
    // asignar un click a cada punto
    punto[i].addEventListener('click',()=>{

        // guardar la posicion de ese punto
        let posicion = i
        // calculando el espacio que debe desplazarse el grande
        let operacion = posicion * -25

        // movemos el grande

        grande.style.transform = `translateX(${ operacion }%)`
// recorremos todos los puntos 
        punto.forEach( (cadaPunto, i)=>{
            punto[i].classList.remove('active')
        })
        punto[i].classList.add('active')
    })
})