const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'dd888fae05msh786bce8aad311aap17301fjsnd695a140e861' }
    });

    const resp = await instance.get();

    if (resp.data.cod === 404) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lon = data.coord.lon;

    return {
        direccion,
        lat,
        lon
    }

}

module.exports = {
    getLugarLatLng
}