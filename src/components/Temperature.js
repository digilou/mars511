import React, { Component } from 'react'

class Temperature extends Component {
  render() {
    return (
      <div id="htmlForecast">
        <div id="day"></div>
        <div id="temp"></div>
          <label className="active" htmlFor="f">&deg;F</label>
          <input type="radio" name="temp_select" id="f" defaultChecked />
          <label htmlFor="c">&deg;C</label>
          <input type="radio" name="temp_select" id="c" />
        <div id="atmo"></div>
      </div>
    );
  }
}

export default Temperature;