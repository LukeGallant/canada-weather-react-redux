import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from './actions/index';


class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state= {term: ''};
		//this keyword needs to be bound
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		
		this.setState({term: event.target.value})
	}
	//this keyword doesnt need to be bound, as it doesnt act on state
	onFormSubmit(event){
		event.preventDefault();
		//We need to go and fetch weather data
		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});
	}

	render(){
		return(
			<form className="input-group" onSubmit={this.onFormSubmit}>
				<input value={this.state.term} placeholder="Get a five day forecast in your favorite cities" className="form-control" onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-primary">Submit</button>
				</span>
			</form>
			)

	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);