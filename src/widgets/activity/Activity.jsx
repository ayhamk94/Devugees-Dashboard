import React from 'react';
import { List } from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import Spinner from '../../components/Spinner';
import './activity.css';
import EventCard from './EventCard';
import Divider from 'material-ui/Divider';

export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }
  componentDidMount() {
    const url = 'https://api.github.com/repos/ayhamk94/Devugees-Dashboard/events';
    fetch(url).then(resp => resp.json()).then((activityData) => {
      this.setState({ data: activityData });
      // console.log(this.state.data);
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="github-activity">
        <h3>{data[0] ? data[0].repo.name.slice(9, data[0].repo.name.length) : <Spinner />}</h3>
        <Divider />
        <List>
          {
            data.length > 1 ?

            data.map((activity) => {
              if (activity.type === 'PullRequestEvent' || activity.type === 'CreateEvent') {
                return <EventCard key={activity.id} activity={activity} />;
              }
                return null;
              })
            :
            <CircularProgress />
          }
        </List>
      </div>
    );
  }
}
