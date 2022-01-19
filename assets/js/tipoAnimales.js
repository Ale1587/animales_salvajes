import Animal from './animal.js'

// crear clases Leon, Lobo, Oso, Serpiente, Aguila 
// exportarla

class Leon extends Animal {
    get rugir (){
        return `./assets/sounds/${this.sonido}` // al no poner # estamos llamando al getter de sonido 
    }
};

class Lobo extends Animal{
    get aullar () {
        return `./assets/sounds/${this.sonido}`
    }
}

class Oso extends Animal{
    get grunir () {
        return `./assets/sounds/${this.sonido}`
    }
}

class Serpiente extends Animal{
    get sisear () {
        return `./assets/sounds/${this.sonido}`
    }
}

class Aguila extends Animal{
    get Chillar() {
        return `./assets/sounds/${this.sonido}`
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila }







