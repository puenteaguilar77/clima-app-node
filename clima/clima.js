const axios = require('axios');



const getClima = async(lat, lon) => {


    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=f83203350e51de49fc48f3803de3b425&units=metric&lang=sp`)
        // const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f83203350e51de49fc48f3803de3b425&units=metric&lang=sp`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}