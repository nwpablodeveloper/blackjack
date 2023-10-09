/**
 * 
 * @param {Array<String>} deck es un arreglos de cartas
 * @returns {String} Retorna 1 carta
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}