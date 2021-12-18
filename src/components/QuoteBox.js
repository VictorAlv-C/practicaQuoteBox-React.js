import React from 'react';

const QuoteBox = ({autor, frase, next, background}) => {
    return (
        <div className='card' style={{color: background}}>
            <i class="fas fa-bookmark"></i>
            <p>{frase}</p>
            <h4>{autor}</h4>
            <a href="#" onClick={next}><i class="uil uil-arrow-circle-right" style={{color: background}}></i></a>
        </div>
    );
};

export default QuoteBox; 