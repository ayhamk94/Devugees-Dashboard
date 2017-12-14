import React from 'react';
import Paper from 'material-ui/Paper';
<<<<<<< 28d3e684390d87e18a72195a0d9dbb6baa6a4163
import PropTypes from 'prop-types';
import WidgetsContainer from './WidgetsContainer';
import SideDrawer from './SideDrawer';

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#E0E0E0',
    borderRadius: 'none',
    alignItems: 'flex-start'
  }
};
=======
import Weather from '../widgets/weather/Weather';
import Activity from '../widgets/activity/Activity';
import Clock from '../widgets/clock/Clock';
import Trello from '../widgets/trello/Trello';
import Notes from '../widgets/notes/Notes';
import Movie from '../widgets/movie/Movie';
import Decider from '../widgets/decider/Decider';
import News from '../widgets/news/News';
import Widget from './Widget';
import Quiz from './Quiz';
>>>>>>> quiz init

const Dashboard = ({
  editMode, data, addRemoveWidgets
}) =>
  (
<<<<<<< 28d3e684390d87e18a72195a0d9dbb6baa6a4163
    <Paper style={styles.container}>
      <SideDrawer
        up={data => addRemoveWidgets(data)}
        widgets={data}
      />
      <WidgetsContainer
        up={data => addRemoveWidgets(data)}
        editMode={editMode}
        widgets={data}
      />
    </Paper>
=======
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
            <Movie autoPlay={false} />
          </Widget>

          <Widget className="small" >
            <Activity />
          </Widget>
          <Widget className="medium" >
            <Quiz />
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
          <Widget className="medium">
            <Notes />
          </Widget>
          <Widget className="medium">
            <Decider />
          </Widget>
          <Widget className="small">
            <News />
          </Widget>

        </div>
      </Paper>
    </div>

>>>>>>> quiz init
  );

export default Dashboard;

Dashboard.propTypes = {
  editMode: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  data: PropTypes.array,
  addRemoveWidgets: PropTypes.func,
};
