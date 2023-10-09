/**
 * Esta función permite tomar una carta del Deck y
 * obtener su valor
 * @param {String} carta Es 1 carta 
 * @returns {Number} regresa el valor de la carta
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;

}