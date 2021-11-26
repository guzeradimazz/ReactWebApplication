import React from 'react';
import Radio from '../radio/Radio';
import './ModalWindow.css';
import classes from './ModalWindow.module.css';

const ModalWindow = ({visible,setVisible,selectedSort,sortPeople}) => {

const rootClasses = [classes.myModal]
if(visible)rootClasses.push(classes.activeModal)

return (
<div className={rootClasses.join(' ')}
            onClick={()=>setVisible(false)} 
        >
            <div 
                className={classes.myModalContent}
                onClick={(e)=>e.stopPropagation()}
            >
                <button onClick={()=>setVisible(false)} className={classes.close__popup}></button>
                <h3>Сортировка</h3>
                <Radio 
                    value={selectedSort}
                    onChange={sortPeople}
                    closeFoo={()=>setVisible(false)}
                    options={[
                    {value:' firstName',name:'По алфавиту'}, {value:'birthday',name:'По дню рождения'} ]} />
</div>
</div>
);
};

export default ModalWindow;