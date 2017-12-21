import React from 'react';
import PropTypes from 'prop-types';

function classForType (unit, type, classNames) {
  let classes = ''
  if ( checkUnitType(unit, 'lesson') ) {
    classes = classNames
  }
  return classes
}

function checkUnitType (unit, typeToCheck) {
  return unit.type === typeToCheck ? true : false;
}

const Unit = props => (
  <div
    className={ classForType( props.data, 'lesson', 'highlighted shadow') }
    style={{
      flexBasis: props.data.minutes,
      zIndex: props.index + 1
    }}
  >
    { checkUnitType(props.data, 'lesson') ?
      <div>
        <span className="timing">
          <span>{props.data.start}</span>
          <br/>
          <span>{props.data.end}</span>
        </span>
        <span className={props.data.type}>
          { props.data.type === 'lesson' ? props.data.body : '' }
        </span>
      </div>
      :
      <div className="break">
        <span>{ props.data.body === 'Lunch break' ? 'Lunch break' : ''}</span>
      </div>
    }
  </div>
);

export default Unit;

Unit.propTypes = {
  data: PropTypes.object.isRequired
};
