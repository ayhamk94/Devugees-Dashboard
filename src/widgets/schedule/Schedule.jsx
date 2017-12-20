import React, { Component } from 'react';
import moment from 'moment';
import Spinner from '../../components/Spinner';

import List from './List';
import defaultData from './ScheduleModel';
import './schedule.css';

export default class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      units: defaultData,
      handler: {
        position: 0
      },
      startTime: 0,
      endTime: 0,
      listHeight: 368
    };
  }

  componentDidMount() {
    this.setState();
    if (this.state.units) {
      this.setUpHandler();
      setInterval(this.updateHandler, 1000 * 60);
    }
    window.onfocus = () => {
      this.setUpHandler();
    };
  }

  getMinutes(milliseconds) {
    return (milliseconds / 1000) / 60;
  }

  setUpHandler = () => {
    const state = this.state;

    const startTime = state.units[0].start.split(':');
    const scheduleStart = moment()
      .hour(startTime[0])
      .minute(startTime[1])
      .seconds('0');

    const endTime = state.units[state.units.length - 1].end.split(':');
    const scheduleEnd = moment()
      .hour(endTime[0])
      .minute(endTime[1])
      .seconds('0');

    const time = scheduleEnd - scheduleStart;
    const minutes = this.getMinutes(time);

    const handlerPerMinute = state.listHeight / minutes;
    const now = moment();
    const initialHandlerPosition = this.getMinutes(now - scheduleStart) * handlerPerMinute;

    this.setState({
      totalMinutes: minutes,
      startTime: scheduleStart,
      endTime: scheduleEnd,
      handler: {
        perMinute: handlerPerMinute,
        position: initialHandlerPosition
      }
    });
  }

  updateHandler = () => {
    const handler = { ...this.state.handler };
    handler.position += handler.perMinute;
    this.setState({ handler });
  }

  dataReady(data) {
    return data && data.length === 0;
  }

  getHeightOfDomNode(node) {
    if (node !== undefined && node !== null) {
      const height = node.clientHeight;
      if (this.state.listHeight !== height) {
        this.setState({ listHeight: height });
      }
    }
  }

  render() {
    const { units, handler } = this.state;

    return (
      this.dataReady(units) ?
        <Spinner />
        :
        <List
          data={units}
          handlerPosition={handler.position}
        // why god? ...why?   ¯\_(ツ)_/¯
          scheduleRef={listNode => this.getHeightOfDomNode(listNode)}
        />
    );
  }
}
