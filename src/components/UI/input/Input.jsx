import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <div className={'margin__tag '+ props.connectionClass + props.loadingClass}>
            <input placeholder='Введи имя, тег, почту...' className='input'  {...props}/>
            <button onClick={()=>props.setVisible(true)} id='input__button'></button>
        </div>
    );
};

export default Input;