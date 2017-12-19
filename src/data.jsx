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

const widgets = [
  {
    name: 'Weather',
    component: <Weather />,
    className: 'small',
    id: 'ddw01',
    mounted: true,
    developerName: 'Ayham'
  },
  {
    name: 'Clock',
    component: <Clock />,
    className: 'small',
    id: 'ddc0',
    mounted: true,
    developerName: 'Axel'

  },
  {
    name: 'Activity',
    component: <Activity />,
    className: 'medium',
    id: 'dda0',
    mounted: false,
    developerName: 'Ayham & Tommey'

  },
  {
    name: 'Trello',
    component: <Trello />,
    className: 'small',
    id: 'ddt0',
    mounted: false,
    developerName: 'Tommey'

  },
  {
    name: 'Notes',
    component: <Notes />,
    className: 'medium',
    id: 'ddn0',
    mounted: false,
    developerName: 'Axel'

  },
  {
    name: 'Movie',
    component: <Movie />,
    className: 'medium',
    id: 'ddm0',
    mounted: true,
    developerName: 'Axel'

  },
  {
    name: 'Decider',
    component: <Decider />,
    className: 'small',
    id: 'ddd0',
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
    id: 'dds01',
    mounted: true,
    developerName: 'Oliver'
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
