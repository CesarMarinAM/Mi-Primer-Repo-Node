const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite=10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base no es un numero');
        } else {
            let data = '';
            for (let i = 1; i<=limite; i++){
                data += (`${base} * ${i} = ${base*i}\n`);
            }
            fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
                if (err) reject (err);
                else resolve(`tabla-${base}.txt`);
            });
        }
    });
}

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i<=limite; i++){
         console.log(`${base} * ${i} = ${base*i}\n`.blue);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}
