"use client"
/* eslint-disable no-unused-vars */
// Fonctions fléchées
// http://localhost:3000/alone/exercise/04.js

import displayText, { App, init } from "../lib/exerciseHelper";
const exercice = () => {
init('Fonctions fléchées')

// 🐶 E = mc² : Créé une fonction fléchée `calculEnergie` avec les propietes `masse` et `celerite` (vitesse de la lumière)
// `celerite` aura la valeur par défaut 300000000
//  🤖 utilise `Math.pow(celerite, 2)` pour le calcul du carré
//  🤖 utilise `round` pour arrondir

// 🐶 appelle la fonction calculEnergie avec 5 grammes (0.005 kg)
// et affiche le résultat à l'ecran avec displayText

const calculEnergie = (masse, celerite) => Math.round((masse * Math.pow(celerite, 2)));

displayText(
    `L'energie d'une masse de 0.005 kg et ${calculEnergie(0.005, 30000000)} joules`
);


};
export default () => <App exercice={exercice} />;