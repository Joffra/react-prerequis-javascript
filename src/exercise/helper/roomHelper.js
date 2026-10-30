// 🐶 créé une fonction `calculAir` (air = longeur x largeur) qui sera exportée par defaut
// 🤖 export default function

export default function calculAir(longeur, largeur){
    return longeur * largeur;
}

// 🐶 créé une fonction `calculPerimetre` (perimètre = longeur x largeur x 2) qui sera exportée
// 🤖 export function

export function calculPerimetre(longeur, largeur){

    let perimètre;
    perimètre = ((longeur + largeur) * 2);

    return perimètre;
}

// 🐶 créé une constante `TEMP_MAX` = 60 qui sera exportée
// 🤖 export const
    export const TEMP_MAX = 60;