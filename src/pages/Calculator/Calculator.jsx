/******* START: IMPORT REACT AND DONGLES *******/
import React from 'react';
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import './Calculator.css';
/******* END: IMPORT LOCAL FILES *******/


function Calculator() {
    return (
        <section>
            <div className='build-item'>
                <button className='minus-button'>-</button>
                <div className='build-number'>3</div>
                <button className='plus-button'>+</button>
                <p>Enameled Glass</p>
            </div>
        </section>
    );
}

export default Calculator;