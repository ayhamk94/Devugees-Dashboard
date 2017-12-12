import React from 'react';

const style = {
  spinner: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}

const Spinner = () => (
  <div className="spinner" style={style.spinner}>
    <img src="./tail-spin.svg" alt="spinner"/>
  </div>
)


export default Spinner
