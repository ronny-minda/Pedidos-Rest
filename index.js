
const axios = require('axios');

let cambio;



axios({
    method: 'put',
    url: 'http://localhost:5000/api/12?id=IdDeLosParametros',
    data: {
        // AQUI VA TODA LA IMFORMACION PARA EL SERVER
        "nombre": "mimi",
        "edad": "85"
    },
    headers: {
        token: 'soy el token'
    }
})
.then( (respuesta) => {

    cambio = respuesta.data;

    console.log(respuesta.data);
})
.catch( (err) => {
    console.log('algo salio mal!')
});

console.log({cambio});





async function getUser() {
    try {
        const response = await axios.get('http://localhost:5000/api/12?id=IdDeLosParametros');
        return response.data
    } catch (error) {
        console.error(error);
    }
}

cambio = getUser();

console.log({cambio});