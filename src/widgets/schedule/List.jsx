import React from 'react';
import PropTypes from 'prop-types';
import Unit from './Unit';

const List = ({ data, handlerPosition, scheduleRef }) => (
  <div className="schedule" ref={scheduleRef}>
    <span
      className={'handel shadow'}
      style={{ transform: `translateY(${handlerPosition}px)`}}
    >
    </span>
    { data.map((unit, i) =>  <Unit key={i} index={i} data={unit} /> ) }
  </div>
);

export default List;

List.propTypes = {
  data: PropTypes.array,
  handlerPosition: PropTypes.number,
  scheduleRef: PropTypes.func
};
