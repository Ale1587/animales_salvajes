// crear la superClase animal
// exportar la superClase

class Animal {
    #nombre
    #edad
    #img
    #comentarios
    #sonido

    constructor(nombre, edad, img, comentarios, sonido){
        this.#nombre = nombre
        this.#edad = edad
        this.#img = img
        this.#comentarios = comentarios
        this.#sonido = sonido
    }

    get nombre(){
        return this.#nombre
    }

    get edad (){
        return this.#edad
    }

    get img (){
        return this.#img
    }

    get sonido (){
        return `<audio controls><source src="./assets/sounds/${this.#sonido}" type="audio/mp3" /></audio>`
    }

    get comentarios (){
        this.#comentarios
    }

    set comentarios (new_comentario) {
        this.#comentarios = new_comentario
    }
}


    export default Animal


 // const lobo = new animal ('Lobezno', 'entre 1 y 3 años', 'Logo.jpg', 'comentarios', 'Aullido.mp3')

 // console.log(lobo);

