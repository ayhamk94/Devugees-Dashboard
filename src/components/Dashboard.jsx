import React from 'react';
import Paper from 'material-ui/Paper';
import Masonry from 'react-masonry-component';
import Weather from '../widgets/weather/Weather';
import Activity from '../widgets/activity/Activity';
import Clock from '../widgets/clock/Clock';
import Trello from '../widgets/trello/Trello';
import Notes from '../widgets/notes/Notes';
import Movie from '../widgets/movie/Movie';
import Widget from './Widget';


const Dashboard = () =>
  (
    <div className="main">
      <Paper
        zDepth={2}
        style={{
            backgroundColor: '#E0E0E0',
            borderRadius: '0.2rem',
            width: '80%',
            padding: ' 0.7rem',
            position: 'relative'
          }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
          <Widget className="medium" >
            <Movie autoPlay={false}/>
          </Widget>
          <Widget className="medium" >
            <Activity />
          </Widget>
          <Widget className="small" >
            <Clock />
          </Widget>
          <Widget className="small">
            <Weather />
          </Widget>
          <Widget className="small">
            <Trello />
          <Widget className="medium">
            <Notes />
          </Widget>
        </div>
      </Paper>
    </div>

  );
export default Dashboard;
