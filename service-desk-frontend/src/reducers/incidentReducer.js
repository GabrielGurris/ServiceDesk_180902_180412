import { INCIDENT_CREATE } from '../actions/incidentActions';

const initialState = {
    incident: null,
}

export default function(state = initialState, action){
    const {type, payload} =action;
    switch(type){
        case INCIDENT_CREATE: {
            const response = payload ? payload.data : null;
            const incident = response ? response.incident : null;
            return {...state, incident};
        }
        default: {
            return state;
        }
    }
}