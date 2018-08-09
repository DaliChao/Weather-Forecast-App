import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord; //es6写法
    // const lon=cityData.city.coord.lon;
    // const lat=cityData.city.coord.lon;

    // console.log(temps);

    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart color="orange" data={temps} units="K (next 5 days)" />
        </td>
        <td>
          <Chart color="green" data={pressures} units="hPa (next 5 days)" />
        </td>
        <td>
          <Chart color="blue" data={humidities} units="% (next 5 days)" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City </th>
            <th style={{ color: 'orange' }}>Temperature (K)</th>
            <th style={{ color: 'green' }}>Pressure (hPa)</th>
            <th style={{ color: 'blue' }}>Humidity (%)</th>
          </tr>
        </thead>

        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; //{weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
