"use client"
// Array : Les Méthodes courantes
// http://localhost:3000/alone/exercise/06.js

import displayText, { App, init } from "../lib/exerciseHelper";
const exercice = () => {
init('Array : Les Méthodes courantes')

const computers = [
  {
    id: 'pc-1',
    name: 'MacBook Pro',
    features: [
      'usb-c',
      'screen-15',
      'batterie',
      'keyboard',
      'webcam',
      'ssd-1to',
    ],
  },
  {
    id: 'pc-2',
    name: 'Lenovo',
    features: ['usb-a', 'screen-15', 'batterie', 'keyboard', 'ssd-500go'],
  },
  {
    id: 'pc-3',
    name: 'MSI',
    features: [
      'usb-a',
      'screen-13',
      'batterie',
      'keyboard',
      'webcam',
      'ssd-500go',
    ],
  },
]

// 🐶 Affiche à l'ecran (displayText) :
// `Mon ordinateur préferé est le MacBook Pro`
// 🤖 en passant par la méthode find

const found = computers.find((computer) => computer.id === 'pc-1');

displayText(`Mon ordinateur préferé est le ${found.name}`);

// 🐶 Code ce qui permet de savoir s'il il y a au moins un ssd-500go
// 🤖 en passant par la méthode `some`

const element = computers.some((computer) => computer.features.includes('ssd-500go'));

displayText(`Y a t-il au moins un pc avec un ssd-500go ? : ${element} `);

// 🐶 Code ce qui permet de savoir s'il il y a que des ssd-500go
// 🤖 en passant par la méthode `every`

const everyPC = computers.every((computer) => computer.features.includes('ssd-500go'));

displayText(`Tous les pc ont un ssd-500go ? : ${everyPC}`);

// 🐶 Affiche la liste des ids
// 🤖 en passant par la méthode `map`

const allIds = computers.map((computer) => computer.id)

displayText(`Tous les ids ${allIds}`);

// 🐶 Récuperer la liste des pc avec une webcam
// 🤖 en passant par la méthode `filter`

const PcWebcam = computers.filter((computer) => computer.features.includes('webcam'));

displayText(`Les pc avec webcam : ${PcWebcam.map(element => element.name)},`);
};
export default () => <App exercice={exercice} />;