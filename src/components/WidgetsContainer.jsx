import React from 'react';
import Paper from 'material-ui/Paper';
import Weather from '../widgets/weather/Weather';
import Activity from '../widgets/activity/Activity';
import Clock from '../widgets/clock/Clock';
import Trello from '../widgets/trello/Trello';
import Notes from '../widgets/notes/Notes';
import Movie from '../widgets/movie/Movie';
import Decider from '../widgets/decider/Decider';
import News from '../widgets/news/News';
import Quote from '../widgets/quote/Quote';
import Widget from './Widget';


const WidgetsContainer = props => (
  <Paper
    zDepth={0}
    style={{
              backgroundColor: '#cccccc',
              width: '75%',
              padding: ' 10px',
              display: 'flex',
               justifyContent: 'flex-start',
               flexWrap: 'wrap'
            }}
  >
    <Widget className="medium" >
      <Movie autoPlay={false} />
    </Widget>

    <Widget className="medium" >
      <Activity />
    </Widget>
    <Widget className="medium">
      <Notes />
    </Widget>
    <Widget className="small" >
      <Clock />
    </Widget>
    <Widget className="small">
      <Weather />
    </Widget>
    <Widget className="small">
      <Trello />
    </Widget>

    <Widget className="small">
      <Decider />
    </Widget>
    <Widget className="small">
      <News />
    </Widget>
    <Widget className="small">
      <Quote />
    </Widget>
  </Paper>
);
export default WidgetsContainer;
