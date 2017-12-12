import React from 'react';


class MainInfo extends React.Component {
  render() {
    const { data } = this.props;
    { data; }
    return (
      <li><span>{data.actor.login} - </span><span> {data.event}</span></li>
    );
  }
}

export default MainInfo;
