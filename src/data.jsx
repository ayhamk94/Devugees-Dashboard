import Weather from './widgets/weather/Weather';
import Activity from './widgets/activity/Activity';
import Clock from './widgets/clock/Clock';
import Trello from './widgets/trello/Trello';
import Notes from './widgets/notes/Notes';
import Movie from './widgets/movie/Movie';
import Decider from './widgets/decider/Decider';
import News from './widgets/news/News';
import Quote from './widgets/quote/Quote';
import React from 'react';

const widgets = [
  {
    name: 'Weather',
    component: <Weather />,
    className: 'small',
    id: 'ddw01',
    mounted: true
  },
  {
    name: 'Clock',
    component: <Clock />,
    className: 'small',
    id: 'ddc0',
    mounted: true

  },
  {
    name: 'Activity',
    component: <Activity />,
    className: 'medium',
    id: 'dda0',
    mounted: false

  },
  {
    name: 'Trello',
    component: <Trello />,

    className: 'small',
    id: 'ddt0',
    mounted: false

  },
  {
    name: 'Notes',
    component: <Notes />,
    className: 'medium',
    id: 'ddn0',
    mounted: false,

  },
  {
    name: 'Movie',
    component: <Movie />,
    className: 'medium',
    id: 'ddm0',
    mounted: true,

  },
  {
    name: 'Decider',
    component: <Decider />,
    className: 'small',
    id: 'ddd0',
    mounted: false,

  },
  {
    name: 'Quote',
    component: <Quote />,
    className: 'small',
    id: 'ddq0',
    mounted: true,

  },
];
export default widgets;
