// consulta al archivo Json dentro de la carpeta

const animales = (function() {
    const urlBase = '../../animales.json'

    const getData = async () => {
        const response = await fetch(urlBase);
        return response.json()
    }
    
    return { getData }
})()

export default animales