import React from 'react';


const MainInfo = (props) => {
  const { data } = props;
  return (
    <div id="weather-maininfo">
      <img alt={data.list[0].weather[0].description} src={`./weatherIcons/${data.list[0].weather[0].icon}.svg`} />
      <div id="main-text">
        <h1>{data.city.name}</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>{data.list[0].weather[0].description}</p>
          <p>{`${Math.round(data.list[0].main.temp)}°`}</p>
        </div>

      </div>
    </div>
  );
};

export default MainInfo;
