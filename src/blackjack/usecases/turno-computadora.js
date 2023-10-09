import { crearCartHTML } from "./crear-carta-html";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";

/**
 * 
 * @param {Number} puntosMinimos Son los puntos minimos que la PC necesita para ganar
 * @param {HTMLElement} puntosHTML Elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 * continua con el mazo de cartas que dejo el jugador anterior | 
 * Genera la juagada automatica de la PC. 
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error('Se necesitan los puntos minimnos');
    if( !puntosHTML ) throw new Error('El puntosHTML es necesario');
    if( !divCartasComputadora ) throw new Error('El divCartasComputadora es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        crearCartHTML( carta, divCartasComputadora )

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}