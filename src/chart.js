import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data){
	return _.round(_.sum(data)/data.length);
}
function max(data){
	return _.round(Math.max(...data));
}
function min(data){
	return _.round(Math.min(...data));
}

export default (props) =>{
	return (
		<div>
			<Sparklines svgHeight={200} svgWidth={200} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div><p className="text-center"> Max: {max(props.data)}{props.units}</p><p className="text-center"> Min: {min(props.data)} {props.units}</p>
			<p className="text-center">Avg: {average(props.data)} {props.units}</p> 
			</div>
		</div>
		)
}