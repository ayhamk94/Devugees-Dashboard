import React from 'react';
import './weather.css';
import MainInfo from './mainInfo';
import Spinner from '../../components/Spinner';

import { cors } from '../../utils.js'

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }
  componentDidMount() {
    const url = `${cors}http://api.openweathermap.org/data/2.5/forecast?q=berlin&units=metric&appid=e269b0432cb35577201f06837e2a5803`;
    fetch(url).then(resp => resp.json()).then((weatherData) => {
      this.setState({ data: weatherData });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div style={{ height: '100%' }}>
        {
        data.city ?
          <MainInfo data={data} />
        :
          <Spinner />
      }
      </div>
    );
  }
}
