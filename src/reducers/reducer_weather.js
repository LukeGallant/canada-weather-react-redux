import { FETCH_WEATHER } from '../actions/index.js'

export default function(state = [] , action){
	switch (action.type){
		case FETCH_WEATHER:
		    console.log("Reducer Called: Switch Activated",action.payload)
			return [action.payload.data,...state]; //state.concat([action.payload.data]);
			
	}
	return state;
}