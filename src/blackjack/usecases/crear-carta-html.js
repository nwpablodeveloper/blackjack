/**
 * 
 * @param {String} carta Recibi la ultima carta pedida al deck 
 * @param {HTMLElement} divCartasHTML recibe el div donde se van a mostrar las cartas pedidas 
 */
export const crearCartHTML = ( carta, divCartasHTML ) => {

    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/cartas/${ carta }.png`; 
    imgCarta.classList.add('carta');
    divCartasHTML.append( imgCarta );

}