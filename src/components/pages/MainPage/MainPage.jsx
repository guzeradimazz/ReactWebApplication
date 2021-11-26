import React, { useState, useEffect, useMemo } from 'react';
import PeopleAPI from '../../../API/PeopleAPI';
import PeopleList from '../../PeopleList/PeopleList';
import TabBar from '../../TabBar/TabBar';
import Input from '../../UI/input/Input';
import { useFetchingHook } from '../../useFetchingHook';
import './MainPage.css';
import ModalWindow from '../../UI/modal/ModalWindow';
import HeaderApp from '../../HeaderApp/HeaderApp';

function MainPage() {
  const [people, setPeople] = useState([]);
  const [displayedPeople, setDisplayed] = useState([]);
  const [globalDisplayedPeople, setGlobalDisplayed] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [visible, setVisible] = useState(false);
  const [fetchData, isLoading, fetchError] = useFetchingHook(async () => {
    const people = await PeopleAPI.getAllPeople();
    setPeople(
      [...people].sort((a, b) => a['firstName'].localeCompare(b['firstName']))
    );
  });
  const tabContent = [
    {
      title: 'Все',
      value: 'all',
    },
    {
      title: 'Android',
      value: 'android',
    },
    {
      title: 'iOS',
      value: 'ios',
    },
    {
      title: 'Дизайн',
      value: 'design',
    },
    {
      title: 'Менеджмент',
      value: 'management',
    },
    {
      title: 'QA',
      value: 'qa',
    },
    {
      title: 'Бэк-офис',
      value: 'back_office',
    },
    {
      title: 'Frontend',
      value: 'frontend',
    },
    {
      title: 'HR',
      value: 'hr',
    },
    {
      title: 'PR',
      value: 'pr',
    },
    {
      title: 'Backend',
      value: 'backend',
    },
    {
      title: 'Техподдержка',
      value: 'support',
    },
    {
      title: 'Аналитика',
      value: 'analytics',
    },
  ];

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setDisplayed(people);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (tabContent[activeTab].value === 'all') {
      setDisplayed(people);
      return;
    }
    setDisplayed(
      people.filter((p) => p.department.includes(tabContent[activeTab].value))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, people]);

  const sortedPeople = useMemo(() => {
    if (selectedSort === 'birthday')
      return displayedPeople.sort((a, b) =>
        a['birthday'].localeCompare(b['birthday'])
      );
    if (selectedSort === 'firstName')
      return displayedPeople.sort((a, b) =>
        a['firstName'].localeCompare(b['firstName'])
      );
    return displayedPeople;
  }, [selectedSort, displayedPeople]);

  useEffect(() => {
    setGlobalDisplayed(
      sortedPeople.filter((people) => {
        return (
          people.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          people.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          people.position.toLowerCase().includes(searchQuery.toLowerCase())
        );
      })
    );
  }, [searchQuery, sortedPeople]);

  const sortPeople = (sort) => {
    setSelectedSort(sort);
    if (sort === 'birthday') {
      setGlobalDisplayed(
        [...displayedPeople].sort((a, b) => {
          let ADate = new Date();
          ADate.setFullYear(a[sort].split('-')[0]);
          ADate.setMonth(a[sort].split('-')[1]);
          ADate.setDate(a[sort].split('-')[2]);
          let BDate = new Date();
          BDate.setFullYear(b[sort].split('-')[0]);
          BDate.setMonth(b[sort].split('-')[1]);
          BDate.setDate(b[sort].split('-')[2]);
          if (ADate.getTime() < BDate.getTime()) return 1;
          if (ADate.getTime() > BDate.getTime()) return -1;
          return 0;
        })
      );
    } else {
      setGlobalDisplayed(
        [...displayedPeople].sort((a, b) => {
          if (a.firstName < b.firstName) return -1;
          if (a.firstName > b.firstName) return 1;
          return 0;
        })
      );
    }
  };
  let showOrNot = true;
  if (isLoading) showOrNot = false;
  if (!window.navigator.onLine) showOrNot = false;
  return (
    <div className='App '>
      <HeaderApp isLoading={isLoading} />
      <h1 className={showOrNot ? 'App__header' : 'no__connection'}>Поиск</h1>
      <Input
        value={searchQuery}
        loadingClass={!isLoading ? '' : 'no__connection'}
        connectionClass={window.navigator.onLine ? '' : 'no__connection'}
        onChange={(e) => setSearchQuery(e.target.value)}
        // onClick={()=>setActiveTab(0)}
        setVisible={setVisible}
      />
      <ModalWindow
        visible={visible}
        setVisible={setVisible}
        selectedSort={selectedSort}
        sortPeople={sortPeople}
      />
      <TabBar
        loadingClass={!isLoading ? '' : 'no__connection'}
        connectionClass={window.navigator.onLine ? '' : 'no__connection'}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <hr />
      <PeopleList
        isLoading={isLoading}
        fetchError={fetchError}
        people={globalDisplayedPeople}
      />
    </div>
  );
}

export default MainPage;
