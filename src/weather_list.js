import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './chart.js'
import GoogleMapReact  from 'google-map-react'
import _ from 'lodash';


class WeatherList extends Component{
	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp)
		const tempsCel = temps.map(function(tempdata){return tempdata-273;});
		const humidities = cityData.list.map(weather => weather.main.pressure)
		const pressures = cityData.list.map(weather => weather.main.humidity);
		const datesRead = cityData.list.map(weather => weather.dt_txt)
		const {lon, lat} = cityData.city.coord;

		const mapStyle = {
			width:'200px',
			height:'200px'
		}

		function readableDate(date){
			//This function makes the date input from the api more human-readable
			if (!date)
			{
				return "error";
			}

			let months = ["Dummy","January","February","March","April","May","June","July","August","September","October","November","December"]
			let mid = _.split(date , ' ' ,2);
			let dateMid =  _.split(mid[0], '-', 3);
			let timeFinal = mid[1];
			let monthMid = _.parseInt(dateMid[1]);
			let monthFinal = months[monthMid];
			let finalPermute = monthFinal + " " + dateMid[2] + " " + dateMid[0] + " " + timeFinal;

			return finalPermute;
		}
		

		return(
			

				<tr key={name}>
					<td>
						<div style={mapStyle}>
							<GoogleMapReact bootstrapURLKeys={{key:'AIzaSyAe7DblnPQWs2WN52cTZ76KpyKzS6f6kb8',language:'en'}} defaultCenter={{lat:lat,lng:lon}} defaultZoom={12}/>
							
						</div>
						<h4>{name}</h4>
							<h5><strong>{readableDate(_.head(datesRead))}</strong> to</h5>
							<h5><strong>{readableDate(_.last(datesRead))}</strong></h5>
					</td>
					<td>
						
						<Chart data={tempsCel} color="orange" units="C"  />
					</td>
					<td>
						<Chart data={humidities} color="blue" units="hPa" />
					</td>
					<td>


						<Chart data={pressures} color="green" units="%" />
					</td>
				</tr>
		
			)
	}
	render(){
		return(
			<table className="table table-responsive">
				<thead><tr><th>City</th><th>Temperature (K)</th><th>Pressure (HPA)</th><th>Humidity (%)</th></tr></thead>
				<tbody>

					{this.props.weather.map(this.renderWeather)}	


				</tbody>

			</table>
			)
	}

}

function mapStateToProps({ weather }){
	return { weather };// { weather}=={ weather: weather}
}

export default connect(mapStateToProps)(WeatherList);