import React from 'react';
import './weather.css';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state={data: {}}
  };
  componentDidMount() {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=berlin&units=metric&appid=e269b0432cb35577201f06837e2a5803`;
    fetch(url).then( resp => resp.json()).then((weatherData)=> {
      this.setState({ data:weatherData});
      console.log(this.state.data);
    })
  }

  render() {
    const { data } = this.state;
    return (
      <div>
      {
        data.city ?
        <div id="weather">
          <img src={`./weatherIcons/${data.list[0].weather[0].icon}.svg`}></img>
          <h1>{data.city.name}</h1>
          <p>{data.list[0].weather[0].description}</p>
          <p>{`${Math.round(data.list[0].main.temp)}°`}</p>
        </div>
        :
        <h1>
          loading...
        </h1>
      }
      </div>
    )
  }

}
