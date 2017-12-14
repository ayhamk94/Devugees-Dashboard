import React, { Component } from 'react';
import axios                from 'axios';
import Spinner              from '../../components/Spinner';

import './schedule.css'

export default class Xkcd extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  model() {
    return  [
      {
        start: '09:00',
        end: '09:45',
        minutes:	45,
        body: 'Welcome, Classbook, Repeating things from previous day',
        type: 'lesson'
      },
      {
        start: '09:45',
        end: '10:30',
        minutes:	45,
        body: 'Live coding, studies, exercises, projects',
        type: 'lesson'
      },
      {
        start: '10:30',
        end: '10:45',
        minutes:	15,
        body: 'Short break',
        type: 'break'
      },
      {
        start: '10:45',
        end: '12:15',
        minutes:	90,
        body: 'Live coding, studies, exercises, projects',
        type: 'lesson'
      },
      {
        start: '12:15',
        end: '13:00',
        minutes:	45,
        body: 'Lunch break',
        type: 'break'
      },
      {
        start: '13:00',
        end: '14:30',
        minutes:	90,
        body: 'Live coding, studies, exercises, projects',
        type: 'lesson'
      },
      {
        start: '14:30',
        end: '14:45',
        minutes:	15,
        body: 'Short break',
        type: 'break'
      },
      {
        start: '14:45',
        end: '16:15',
        minutes:	90,
        body: 'Live coding, studies, exercises, projects',
        type: 'lesson'
      }
    ]
  }

  componentDidMount() {
    this.setState({ data: this.model })
  }


  render() {

    const handleSettings = {
        width: 'calc(100% + 8px) ',
        height: '2px',
        backgroundColor: 'red',
        margin: '-4px',
        zIndex: '100'
    }


    return (

      <div className="schedule">
        <span className={'shadow'} style={handleSettings}> </span>
        {this.model().map((unit, i) => {
          return (
            <div
              key={i}
              className={ unit.type == 'lesson' ? 'highlighted shadow' : ''}
              style={{
                flexBasis: unit.minutes,
                zIndex: i + 1
              }}
            >
              <span key={i} className={unit.type} >
                { unit.type == 'lesson' ? unit.body : '' }
              </span>
            </div>
          )
        })}
      </div>

    );
  }
}
