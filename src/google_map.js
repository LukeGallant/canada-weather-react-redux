import React ,{ Component } from 'react';

const GOOGLE_API_KEY = 'AIzaSyAe7DblnPQWs2WN52cTZ76KpyKzS6f6kb8'

class GoogleMap extends Component{
	componentDidMount(){
		new window.google.maps.Map(this.refs.map,{
			zoom:12,
			center:{
				lat:this.props.lat,
				lng:this.props.lon
			}
		});
	}

	render(){
		return <div ref="map" />;
	}
}

export default GoogleMap;
