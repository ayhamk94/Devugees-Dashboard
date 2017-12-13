import React from 'react';
import PropTypes from 'prop-types';

class MainInfo extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <li><span>{data.actor.login} - </span><span> {data.event}</span></li>
    );
  }
}

MainInfo.propTypes = {
  data: PropTypes.object.isRequired,
};


export default MainInfo;
