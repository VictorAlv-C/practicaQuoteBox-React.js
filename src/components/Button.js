import React from 'react';

const Button = ({background, nextSentence}) => {
    return (
        <>
          <a href="#" onClick={nextSentence}><i class="uil uil-arrow-circle-right" style={{color: background}}></i></a>
        </>
    );
};

export default Button;