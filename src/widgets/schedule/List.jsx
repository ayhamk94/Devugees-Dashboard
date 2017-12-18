import React                from 'react';
import Unit                 from './Unit';

const List = ({data, handlerPosition, scheduleRef}) => (
  <div className="schedule" ref={scheduleRef}>
    <span
      className={'handel shadow'}
      style={{ transform: `translateY(${handlerPosition}px)`}}
    >
    </span>
    {data.map((unit, i) =>  <Unit key={i} index={i} data={unit} /> )}
  </div>
)

export default List
