import React from 'react';
import { useHistory } from 'react-router';
import './PeopleItem.css';

const PeopleItem = (props) => {
  const router = useHistory();
  return (
    <div className='people' onClick={() => router.push(`/${props.human.id}`)}>
      <div className='people__content '>
        <img src={props.human.avatarUrl} alt='avatar' />
        <div>
          <div className='people__info'>
            <div className='people__name'>
              {props.human.firstName + ' ' + props.human.lastName}
            </div>
            <div className='people__department'>
              {props.human.department.substring(0, 2)}
            </div>
          </div>
          <p>{props.human.position}</p>
        </div>
      </div>
    </div>
  );
};

export default PeopleItem;
