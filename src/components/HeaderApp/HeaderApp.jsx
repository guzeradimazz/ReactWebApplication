import React from 'react';

const HeaderApp = ({isLoading}) => {
    return (
        <div>
            <nav className={window.navigator.onLine ? 'no__connection' : 'error__connection'}>
                <h1 className='App__header__white'>Поиск</h1>
                <p className={window.navigator.onLine ? 'no__connection' : 'error__p'}>Не могу обновить данные. Проверь соединение с интернетом.</p>
            </nav>
            <nav className={!isLoading ? 'no__connection' : 'load__connection'}>
                <h1 className='App__header__white'>Поиск</h1>
                <p className={!isLoading ? 'no__connection' : 'error__p'}>Секундочку, гружусь...</p>
            </nav>
        </div>
    );
};

export default HeaderApp;