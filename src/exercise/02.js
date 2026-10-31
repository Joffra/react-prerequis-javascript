"use client"
// JavaScript - Template Literals
// http://localhost:3000/alone/exercise/02.js

// eslint-disable-next-line no-unused-vars
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init('JavaScript - Template Literals')

// 🐶 Créé 3 constantes avec leurs valeurs 5 10 et 200
    const FIRST_VAL = 5;
    const SECOND_VAL = 10;
    const THIRD_VAL = 200;

    let MaxNumber = Math.max(FIRST_VAL, SECOND_VAL, THIRD_VAL);

// 🐶 utilise la fonction `Math.max` pour trouver le nombre le plus grand
// 📑 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// 🐶 affiche le liblélé “Le nombre le plus grand entre 5 10 200 est 200 !”
// à l'écran avec 'displayText'
    let display = `Le nombre le plus grand entre ${FIRST_VAL} ${SECOND_VAL} ${THIRD_VAL} est ${MaxNumber}`;
    displayText(display);
};
export default () => <App exercice={exercice} />;