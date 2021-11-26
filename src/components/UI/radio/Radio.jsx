import React from 'react';
import './Radio.css';

const Radio = ({options,value,onChange,closeFoo}) => {
return (
<div className='popup__wrap' value={value} onChange={event=>onChange(event.target.value)}
    >
        {options.map(item=>(
            <div key={item.value}>
                <input type="radio"  value={item.value} id={item.value} name='radioSortPeople'
                    onClick={closeFoo}
                />
                <label htmlFor={item.value}>{item.name}</label>
            </div>
        ))}
</div>
);
};

export default Radio;