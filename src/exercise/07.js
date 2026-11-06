"use client"
// Promise aync await
// http://localhost:3000/isolated/final/07.js

import displayText, { App, init } from "../lib/exerciseHelper";
const exercice = () => {
init('Promise aync await')

// 🐶 Créé un Promise `calculNombrePair` qui detecte si la parametre en entrée est un nombre impair
// utilise modulo pour savoir si un nombre est pair
// 🤖 if (nombre % 2 == 0)

function calculNombrePair(nombre = 0){
    return new Promise((resolve, reject) =>{
        if(nombre % 2 !== 0){
            reject('KO');
        }else{
            resolve('OK');
        }
    })
}

// 🐶 Appelle cette Promise avec les nombres 2 et 3 et gère les cas ok et ko dans la console

// calculNombrePair(2).then(callBackOK, callBackError);

calculNombrePair(2).then(
    e => console.log(e),
    err => console.error(err),
)
calculNombrePair(3).then(
    e => console.log(e),
    err => console.error(err),
)

// 🐶 Appelle cette Promise en asynchrone
// 🤖 async function
// 🤖 await calculNombrePair

async function calculNombrePairAsync(){
    try{
        let result = await calculNombrePair(2);
        console.log(`succes 2 est pair : result : ${result}`);
        result = await calculNombrePair(3);
        console.log(`succes 3 est pair : result : ${result}`);
    }catch(err){
        console.error('Catch de err : ', err);
    }
}

calculNombrePairAsync();
};
export default () => <App exercice={exercice} />;