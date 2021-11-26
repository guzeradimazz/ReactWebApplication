import React from 'react';
import './CriticalError.css';

const CriticalError = () => {
function refreshPage() {
window.location.reload()
}
return (
<div className='critical__error'>
    <div className='flyingPlate'></div>
    <h2>Какой-то сверхразум все сломал</h2>
    <p className='tab__list__item'>Постараемся быстро починить</p>
    <p onClick={refreshPage} className='refresh'>Попробовать снова</p>
</div>
);
};

export default CriticalError;