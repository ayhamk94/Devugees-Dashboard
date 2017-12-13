import React from 'react';
import PropTypes from 'prop-types';

class MainInfo extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <li>
        <span>{data.board.name}</span>
        <span>{data.card.name}</span>
      </li>
    );
  }
}

MainInfo.propTypes = {
  data: PropTypes.object.isRequired,
};


export default MainInfo;
