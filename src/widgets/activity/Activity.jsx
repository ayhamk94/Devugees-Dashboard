import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Spinner from '../../components/Spinner';
import './activity.css';
import EventCard from './EventCard';

export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }
  componentDidMount() {
    const url = 'https://api.github.com/repos/ayhamk94/Devugees-Dashboard/events';
    fetch(url).then(resp => resp.json()).then((activityData) => {
      this.setState({ data: activityData });
      console.log(this.state.data);
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="activity">
        <h1>Github Activity</h1>
        <List>
          {
            data.length > 1 ?

            data.map(activity => <EventCard key={activity.id} activity={activity} />)
            :
            <Spinner />
          }
        </List>
      </div>
    );
  }
}
