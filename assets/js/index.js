// Clases 
// Tipo
// consulta a la API
// Main

// 1. crear clases de animal
// 2. crear subclases de animales
// 3. consulta de la a API
// 4. crear un iife con una función init y desde donde se haga el llamado a la consulta
// tomar la respuesta y asignarle el contenido a una constante de estado
// 5. capturar el evento submit y crear la instancia del animal
// 6. agregar instancia del animal a un array de animales en el estado
// 6. agregar la instancia del animal en el html (sacarlo desde el estado)
// 7. generar el modal en base al animal






import consulta from "./consulta.js";

async function log() {
    const data = await consulta.getData()
    console.log(data)
}

log()



/* acá se debería obtener la imagen que corresponde a cada nombre de animal  */
// primero se debe seleccionar que elemento del dom quiero escuchar
// igualar el resultado con el json 
// luego imprimirlo en el html


/*
const animalhtml = (function(){

    const form = document.querySelector()


})()



document.querySelector('.animal').addEventListener('click', async () => {
    const { animales } = await animales.getData() 
    console.log(animales);

})
*/