const argv = require('./config/yargs').argv;

const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

// lugar.getLugarLatLng(argv.direccion)
// .then(console.log);

// clima.getClima(-30.77, 151.45)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima de ${coords.direccion} es de ${temp} °C.`;

    } catch (error) {

        `No se puede determinar el clima de ${direccion}.`

    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);