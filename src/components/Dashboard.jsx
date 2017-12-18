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
import Schedule from '../widgets/schedule/Schedule';
import Widget from './Widget';



const Dashboard = () =>
  (
    <div className="main">
      <Paper
        zDepth={2}
        style={{
            backgroundColor: '#E0E0E0',
            borderRadius: '0.2rem',
            width: '80vw',
            maxHeight: '90vh',
            overflowY: 'scroll',
            padding: ' 0.7rem',
            position: 'relative'
          }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
          <Widget className="medium" >
            <Movie autoPlay={false} />
          </Widget>

          <Widget className="small" >
            <Activity />
          </Widget>
          <Widget className="small" >
            <Clock />
          </Widget>
          <Widget className="small">
            <Weather />
          </Widget>
          <Widget className="big">
            <Trello />
          </Widget>
          <Widget className="medium">
            <Notes />
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
          <Widget className="small">
            <Schedule />
          </Widget>
        </div>
      </Paper>
    </div>

  );
export default Dashboard;
