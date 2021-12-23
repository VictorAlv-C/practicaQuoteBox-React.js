import React from 'react';

const QuoteBox = ({author, sentence}) => {
    return (
         <>
            <i class="fas fa-bookmark"></i>
            <p>{sentence}</p>
            <h4>{author}</h4>
        </>
    );
};

export default QuoteBox; 