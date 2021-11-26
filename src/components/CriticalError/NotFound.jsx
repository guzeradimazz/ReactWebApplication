import React from 'react';
import './CriticalError.css';

const NotFound = () => {
return (
<div className='critical__error'>
    <div className='magnify'></div>
    <h2>Мы никого не нашли</h2>
    <p className='tab__list__item'>Попробуй скорректировать запрос</p>
</div>
);
};

export default NotFound;