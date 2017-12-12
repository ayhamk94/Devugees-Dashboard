import React from 'react';


class MainInfo extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div id="weather-maininfo">
        <img src={`./weatherIcons/${data.list[0].weather[0].icon}.svg`}></img>
        <div id="main-text">
          <h1>{data.city.name}</h1>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <p>{data.list[0].weather[0].description}</p>
            <p>{`${Math.round(data.list[0].main.temp)}°`}</p>
          </div>

        </div>
      </div>
    )
  }
}

export default MainInfo;
