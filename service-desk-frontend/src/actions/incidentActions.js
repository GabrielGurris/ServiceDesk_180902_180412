import { apiPost, apiGet,apiDelete } from '../helpers/api';

export const INCIDENT_CREATE = 'INCIDENT_CREATE';

export const incidentCreate = async (data) => {

    const payload = await apiPost('/incident', data);

    return { type: INCIDENT_CREATE, payload };
}

export const getAllIncident = async (id) => {
    const results = await apiGet(`/incident/${id}`);

    return results.data;
}

export const deleteIncident = async (id,accountId) => {
    await apiDelete(`/incident/${id}/${accountId}`);
}