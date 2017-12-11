import React, { Component } from 'react';

import './clock.css'

export default class Clock extends Component {
  render() {
    return(
      <section className="clock">
        <h2>Clock</h2>
        <div className="clock-face">
          <div className="clock-hour"></div>
          <div className="clock-min"></div>
          <div className="clock-second"></div>
        </div>
      </section>
    )
  }
}
