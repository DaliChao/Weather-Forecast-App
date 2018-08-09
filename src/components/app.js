import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="top-bar">
          <div className="container">Weather Forecaster</div>
        </div>
        <div className="container">
          <h3>Please input the city name:</h3>
          <SearchBar />
          <WeatherList />
        </div>
      </div>
    );
  }
}
