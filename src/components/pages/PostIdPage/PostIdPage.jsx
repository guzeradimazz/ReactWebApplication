import React,{ useEffect,useState } from 'react';
import { useParams } from 'react-router';
import PeopleAPI from '../../../API/PeopleAPI';
import { useFetchingHook } from '../../useFetchingHook';
import { useHistory } from "react-router";
import './PostIdPage.css'
import CriticalError from '../../CriticalError/CriticalError';

const PostIdPage = () => {
    const router = useHistory()

    let params={
        id:''
    }
    params = useParams()
    let peopleObject={
        avatarUrl:'',
        department:'',
        firstName:'',
        lastName:'',
        position:'',
        birthday:'',
        phone:''
    }
    const [people,setPeople] = useState(peopleObject)
    const [fetchLoading,isLoading,fetchError] = useFetchingHook(async()=>{
        const response = await PeopleAPI.getPeopleById(params.id)
        setPeople(response)
    })
    useEffect(() => {
        fetchLoading(params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    let PeopleDate = new Date(people.birthday.substring(0,4),people.birthday.substring(5,7),people.birthday.substring(8,10))
    let mounthPeople = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
    let nowDate = new Date()
    let PeopleAges 

    function agetToStr(age) {
        let txt
        let count
        count = age % 100;
        if (count >= 5 && count <= 20) {
            txt = 'лет';
        } else {
            count = count % 10;
            if (count === 1) {
                txt = 'год'
            } else if (count >= 2 && count <= 4) {
                txt = 'года'
            } else {
                txt = 'лет'
            }
        }
        return `${age} ${txt}`
    }
    PeopleAges =  agetToStr(nowDate.getFullYear()-PeopleDate.getFullYear())

    // eslint-disable-next-line no-useless-concat
    const fullPhone = '+7'+' ('+people.phone.split('-').join('').substring(0,3)+') '+people.phone.split('-').join('').substring(3,6)
        +' '+people.phone.split('-').join('').substring(6,8)+' '+people.phone.split('-').join('').substring(8,10)
    
    if(isLoading)return <div className="lds-dual-ring"></div>
    if(fetchError)return <CriticalError/>
    
    return(
        <div>
            <div className="people__top">
                <div 
                    className="back__to__main"
                    onClick={()=> router.push('/')}
                > </div>
                <div className="people__top__info">
                    <img className="people__top__info__avatar" src={people.avatarUrl} alt="avatar"/>
                    <div className="people__top__info__name">
                        <h2>{people.firstName+' '+people.lastName}</h2>
                        <p className="people__department">{people.department.substring(0,2)}</p>
                    </div>
                    <p className="people__top__info__position">{people.position}</p>
                </div>
            </div>
            <div className="people__bottom">
                <div className="people__bottom__left">
                    <div className="people__bottom__left__item">
                        <div className="date__image"></div>
                        <p>{PeopleDate.getDate()+' '+mounthPeople[PeopleDate.getMonth()].toLowerCase()+' '+PeopleDate.getFullYear()}</p>
                    </div>
                    <div className="people__bottom__left__item">
                        <div className="phone__image"></div>
                        <a href={'tel:+7'+people.phone.split('-').join('')}>{fullPhone}</a>
                    </div>
                </div>
                <div className="people__bottom__right">
                    <p className="people__department">
                    {PeopleAges}
                    </p>
                </div>
            </div>
        </div>
    );
    
};

export default PostIdPage;