import React from 'react';
import './TabBar.css';

const tabContent = [
    {
        title: 'Все',
        value: 'all'
    },
    {
        title: 'Android',
        value: 'android'
    },
    {
        title: 'iOS',
        value: 'ios'
    },
    {
        title: 'Дизайн',
        value: 'design'
    },
    {
        title: 'Менеджмент',
        value: 'management'
    },
    {
        title: 'QA',
        value: 'qa'
    },
    {
        title: 'Бэк-офис',
        value: 'back_office'
    },
    {
        title: 'Frontend',
        value: 'frontend'
    },
    {
        title: 'HR',
        value: 'hr'
    },
    {
        title: 'PR',
        value: 'pr'
    },
    {
        title: 'Backend',
        value: 'backend'
    },
    {
        title: 'Техподдержка',
        value: 'support'
    },
    {
        title: 'Аналитика',
        value: 'analytics'
    }
]

const TabBar = ({activeTab,setActiveTab,connectionClass,loadingClass}) => {

    return (
        <div className={'tab__list ' + connectionClass + loadingClass}>
        {tabContent.map((item, index) => (
            <div
                className={index === activeTab ? 'active__list__item' : 'tab__list__item'}
                key={item.title}
                onClick={() => setActiveTab(index)}
            >
                {item.title}
            </div>
        ))}
      </div>
    );
};

export default TabBar;