import React from 'react';

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
    console.log(this.state.data.city);
  const cityName =   this.state.data.city ? this.state.data.city.name : 'loading...'
    return (
      <div>
        <h1>
          {cityName}
        </h1>
      </div>
    )
  }

}
