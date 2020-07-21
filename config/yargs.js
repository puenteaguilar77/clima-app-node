const { string } = require('yargs');

const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la Ciudad para obtener el clima',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}