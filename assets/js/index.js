import consulta from "./consulta.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./tipoAnimales.js";


const dom = (function () {
    // el profe creo una constante llamada estado para alojar las respuesta asincronas del json, que vienen del modulo 
    // consulta. Esa constante es un objeto, que dentro tiene un array vacio. la colocó afuera de toda función para que tuviera un scope mayor

    
    const estado = {
        animales: [],
        instancias: []
    }
    
    // DOmcache

    const tipo = document.querySelector('#animal')
    const edad_animal = document.querySelector('#edad')
    const comentario = document.querySelector('#comentarios')
    const tabla_html = document.querySelector('#Animales')
    const img_container = document.querySelector('.p-5.card.bg-dark')
    const form = document.querySelector('form')
    const modal = document.querySelector('.modal-body')

    
    form.addEventListener('submit', SubmitHandler);
    $('#modal').on('show.bs.modal', showModalHandler)

    // comprobación que consulta json funciona. accediendo a la consulta del json en el archivo importado y igualando la const estado con el resultado de la 
    // consulta

    async function init() {
        const json = await consulta.getData()
        estado.animales = json.animales
    }


        tipo.addEventListener('change', () => {
        const { animales } = estado
        const animal_valor = tipo.value
        const ImagenesTemplate = animales.find((e) => e.name == animal_valor).imagen

        img_container.innerHTML = `<img src="assets/imgs/${ImagenesTemplate}" class="figure"/>`

    })


    // capturar el evento submit y crear la instancia animal
    // aquí creo una const del elemento form, para capturar el submit y luego le hizo a form el addEventListener

    
    


    // en la función handler creo una variable instancia, para poder almacenar las instancias que vamos creando al elegir un animal
    // además de todo eso a todos los elementos del form que se usan les colocó nombres para se identificados más rapido
    function SubmitHandler(e) {
        e.preventDefault()

        let instancia // aqui almaceno las instancias creadas 

        
        const animal_json = estado.animales.find(animal => animal.name === form.nombre.value)  // aqui igualo el valor del json con el option del form

        const form_data = {
            edad: form.edad.value,
            nombre: form.nombre.value,
            comentario: form.comentario.value,
            imagen: animal_json.imagen, // para acceder a la imagen recurro a la const animal_json que se introduce al array del json y al imagen dentro de ese array
            sonido: animal_json.sonido  // idem de imagen
        }

        // en el if, voy viendo si la seleccion de option es igual al nombre del animal, creo la instancia de ese animal

        if (form_data.edad === 'Seleccione un rango de años' || form_data.comentario === '') {
            return alert ('favor complete el formulario ')} 
            
            
        if (form_data.nombre === 'Leon') {
            instancia = new Leon(form_data.nombre, form_data.edad, form_data.imagen, form_data.comentario, form_data.sonido)
        } else if (form_data.nombre === 'Lobo') {
            instancia = new Lobo(form_data.nombre, form_data.edad, form_data.imagen, form_data.comentario, form_data.sonido)
        } else if (form_data.nombre === 'Oso') {
            instancia = new Oso(form_data.nombre, form_data.edad, form_data.imagen, form_data.comentario, form_data.sonido)
        } else if (form_data.nombre === 'Serpiente') {
            instancia = new Serpiente(form_data.nombre, form_data.edad, form_data.imagen, form_data.comentario, form_data.sonido)
        } else if (form_data.nombre == 'Aguila') {
            instancia = new Aguila(form_data.nombre, form_data.edad, form_data.imagen, form_data.comentario, form_data.sonido)
        }
        
        estado.instancias.push(instancia)
        const card = htmlCard(instancia, estado.instancias.length - 1) 
        
        tabla_html.innerHTML += card

        form.reset()
        img_container.innerHTML = '<div id="preview" name="preview"></div>'
      
    }


    function htmlCard (instancia, index){
        return `<div class="card-group" style="width: 18rem;">
        <img src="./assets/imgs/${instancia.img}" class="card-img-top img-fluid" alt="..." data-toggle="modal" data-target="#modal" data-index ="${index}"
        >
        <div class="card-body">${instancia.sonido}</div>
        </div>`
    }

    function htmlModal (animal){

        console.log(animal.edad);
        return  `<div class="card" style="width: 18rem;">
        <img src="./assets/imgs/${animal.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <p>${animal.edad}</p>
            <p>${animal.comentarios}</p>
        </div>
      </div>`
    }
   
    function showModalHandler(e) {
        const animal = estado.instancias[e.relatedTarget.dataset.index]
        modal.innerHTML = htmlModal(animal)
    }


    return { init: init };

})()

dom.init()


