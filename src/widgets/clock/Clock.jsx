import React, { Component } from 'react';

import './clock.css';

const clock = () => {
  const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return {
    hours: hours < 10 ? `0${hours}` : hours,
    minutes: minutes < 10 ? `0${minutes}` : minutes,
    seconds: seconds < 10 ? `0${seconds}` : seconds,
    day: day[date.getDay()],
    month: month[date.getMonth()],
    date: date.getDate(),
    year: date.getFullYear()
  };
};

export default class Clock extends Component {
  constructor() {
    super();
    this.clock = clock();
    this.time = {
      hours: this.clock.hours,
      minutes: this.clock.minutes,
      seconds: this.clock.seconds
    };

    this.state = {
      day: this.clock.day,
      month: this.clock.month,
      date: this.clock.date,
      year: this.clock.year
    };
  }
  componentDidMount() {
    setInterval(this.interval, 1000);
  }
  interval = () => {
    const { hours, minutes, seconds } = clock();
    this.time.hours = hours;
    this.time.minutes = minutes;
    this.time.seconds = seconds;

    this.handleRotation();
  }
  handleRotation() {
    const { hours, minutes, seconds } = this.time;

    const deg = {
      sec: ((seconds / 60) * 360) + 90,
      min: ((minutes / 60) * 360) + 90,
      hour: ((hours / 12) * 360) + ((minutes / 60) * 30) + 90
    };

    deg.sec === 90 ? this.sec.style.transition = 'all 0s ease-in-out' : this.sec.style.transition = 'all 0.5s ease-in-out';
    deg.min === 90 ? this.min.style.transition = 'all 0s ease-in-out' : this.min.style.transition = 'all 0.5s ease-in-out';

    this.sec.style.transform = `rotate(${deg.sec}deg)`;
    this.min.style.transform = `rotate(${deg.min}deg)`;
    this.hour.style.transform = `rotate(${deg.hour}deg)`;
  }
  render() {
    const {
      day, month, date, year
    } = this.state;

    return (
      <div className="clock-main">
        <div className="clock-wrapper" key="clock">
          <div className="clock-face">
            <div className="clock hour" ref={hour => this.hour = hour} />
            <div className="clock min" ref={min => this.min = min} />
            <div className="clock second" ref={sec => this.sec = sec} />
          </div>
        </div>
        <div style={{textAlign: "center"}} className="date" key="date">
          <span className="day">{day.toUpperCase()}</span>
          <div style={{textAlign: "center"}}>
            <span className="date">{date} </span>
            <span className="month">{month.toUpperCase()} </span>
            <span className="year">{year} </span>
          </div>
        </div>
      </div>
    )
  }
}
