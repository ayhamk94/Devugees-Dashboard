import React, { Component } from 'react';

import './clock.css'

const clock = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return {
    hours: hours < 10 ? `0${hours}` : hours,
    minutes: minutes < 10 ? `0${minutes}` : minutes,
    seconds: seconds < 10 ? `0${seconds}` : seconds,
  }
}

export default class Clock extends Component {
  constructor(){
    super()
    this.clock = clock()
    this.state = {
      hours: this.clock.hours,
      minutes: this.clock.minutes,
      seconds: this.clock.seconds
    }
  }
  componentDidMount(){
     setInterval(this.interval, 1000);
  }
  interval = () => {
    const { hours, minutes, seconds } = clock()
    this.setState({ hours, minutes, seconds })
  }
  render() {
    const { hours, minutes, seconds } = this.state
    return(
      <div className="clock">
        <h1>{`${hours}:${minutes}:${seconds}`}</h1>
        <div className="clock-face">
          <div className="clock-hour" ref={hour => this.hour = hour}></div>
          <div className="clock-min" ref={min => this.min = min}></div>
          <div className="clock-second" ref={sec => this.sec = sec}></div>
        </div>
      </div>
    )
  }
}
