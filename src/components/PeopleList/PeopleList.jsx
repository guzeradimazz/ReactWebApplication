import React from "react";
import CriticalError from "../CriticalError/CriticalError";
import PeopleItem from "../PeopleItem/PeopleItem";
import NotFound from '../CriticalError/NotFound';
import '../../styles/App.css';

const PeopleList = ({people, isLoading, fetchError}) =>{
    if(isLoading)return <div className="lds-dual-ring"></div>
    if(fetchError)return <CriticalError/>
    if(!people.length)return <NotFound/>
    return(
        <div>
            {people.map(function (human) {
                return(
                    <PeopleItem  human = {human} key ={human.id}/>
                )
            })}
        </div>
    );
}
export default PeopleList;