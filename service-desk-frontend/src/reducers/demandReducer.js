import { DEMAND_CREATE } from '../actions/demandActions';

const initialState = {
    demand: null,
}

export default function(state = initialState, action){
    const {type, payload} =action;
    switch(type){
        case DEMAND_CREATE: {
            const response = payload ? payload.data : null;
            const demand = response ? response.demand : null;
            return {...state, demand};
        }
        default: {
            return state;
        }
    }
}