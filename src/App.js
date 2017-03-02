import React, { Component } from 'react';
import SearchBar from './searchbar.js'
import WeatherList from './weather_list.js'
import NavBar from './navbar.js'

export default class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <SearchBar />
      <WeatherList />
      </div>
    );
  }
}

