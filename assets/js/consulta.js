// consulta al archivo Json dentro de la carpeta

const animales = (function() {
    const urlBase = '../../animales.json'

    const getData = async () => {
        const respuesta = await fetch(urlBase);
        return respuesta.json()
    }
    
    return { getData }
})()

export default animales