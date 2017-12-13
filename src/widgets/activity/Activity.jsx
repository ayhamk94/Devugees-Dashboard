import React from 'react';
import './activity.css';
import MainInfo from './mainInfo';

export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }
  componentDidMount() {
    const url = 'https://api.github.com/repos/ayhamk94/Devugees-Dashboard/issues/events';
    fetch(url).then(resp => resp.json()).then((activityData) => {
      this.setState({ data: activityData });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="activity" >
        <h1>THE TOMMY WIDGET</h1>
        <h3>github recent activity</h3>
        <ul style={{ height: '100%' }}>
          {
            data.length > 1 ?
            data.map((data, i) => <MainInfo key={i} data={data} />)
            :
            <li>
              <h1> loading...  </h1>
            </li>
          }
        </ul>
      </div>
    );
  }
}
