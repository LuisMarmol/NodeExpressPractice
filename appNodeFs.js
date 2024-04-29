/*Usando File System*/

//Forma de concatenar: 'Nombre de usuario: ' + userName;
//Template String
//ALT+96 = `

const fs = require('fs');

const userName = 'Luis';
const userLast = 'Mármol';
const userFull = userName + ' ' + userLast;

//Crear archivo usando otra forma de concatenación
fs.writeFile('new-test-data.txt', `Nombre de usuario: ${userFull}`, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Archivo creado satisfactoriamente');
});

//Si no damos un nombre para el archivo, saltará un error
/*fs.writeFile('', `Nombre de usuario: ${userName}`, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Archivo creado satisfactoriamente');
});*/

//Crear archivo sin concatenar
/*fs.writeFile('test-data.txt', 'Archivo de prueba: ' + userName, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Archivo creado satisfactoriamente');
});*/