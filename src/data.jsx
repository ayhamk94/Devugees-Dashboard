import React from 'react';
import Weather from './widgets/weather/Weather';
import Activity from './widgets/activity/Activity';
import Clock from './widgets/clock/Clock';
import Trello from './widgets/trello/Trello';
import Notes from './widgets/notes/Notes';
import Movie from './widgets/movie/Movie';
import Decider from './widgets/decider/Decider';
import News from './widgets/news/News';
import Quote from './widgets/quote/Quote';
import Schedule from './widgets/schedule/Schedule';
import Bitcoin from './widgets/bitcoin/bitcoin';
import Quiz from './widgets/quiz/Quiz';

const widgets = [
  {
    name: 'Weather',
    component: <Weather />,
    className: 'small',
    id: 'ddw013245123',
    mounted: true,
    developerName: 'Ayham'
  },
  {
    name: 'News',
    component: <News />,
    className: 'small',
    id: 'ddn0112315',
    mounted: true,
    developerName: 'Maxi'
  },
  {
    name: 'Clock',
    component: <Clock />,
    className: 'small',
    id: 'ddc0123125512',
    mounted: true,
    developerName: 'Axel'

  },
  {
    name: 'Activity',
    component: <Activity />,
    className: 'medium',
    id: 'dda00283408',
    mounted: false,
    developerName: 'Ayham & Tommey'

  },
  {
    name: 'Trello',
    component: <Trello />,
    className: 'small',
    id: 'ddt089127389',
    mounted: false,
    developerName: 'Tommey'

  },
  {
    name: 'Notes',
    component: <Notes />,
    className: 'medium',
    id: 'ddn01938573237',
    mounted: false,
    developerName: 'Axel'

  },
  {
    name: 'Movie',
    component: <Movie />,
    className: 'medium',
    id: 'ddm07816239823470',
    mounted: true,
    developerName: 'Axel'

  },
  {
    name: 'Decider',
    component: <Decider />,
    className: 'small',
    id: 'ddd01928738924730',
    mounted: true,
    developerName: 'Tommey'

  },
  {
    name: 'Quote',
    component: <Quote />,
    className: 'small',
    id: 'ddq0',
    mounted: true,
    developerName: 'Maxi'

  },
  {
    name: 'Schedule',
    component: <Schedule />,
    className: 'small',
    id: 'dds0119723809823876243',
    mounted: true,
    developerName: 'Oliver'
  },
  {
    name: 'Quiz',
    component: <Quiz />,
    className: 'medium',
    id: 'ddqz',
    mounted: true,
    developerName: 'Nabeel'
  },
   {
    name: 'Bitcoin',
    component: <Bitcoin />,
    className: 'small',
    id: 'dddbit01',
    mounted: true,
    developerName: 'Asjad'
  },

   
];
export default widgets;
