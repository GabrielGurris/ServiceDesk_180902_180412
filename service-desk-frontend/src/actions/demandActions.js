import { apiPost,apiGet,apiDelete } from '../helpers/api';

export const DEMAND_CREATE = 'DEMAND_CREATE';

export const demandCreate = async (data) => {
    
    const payload = await apiPost('/demand', data);

    return { type: DEMAND_CREATE, payload };
};

export const getAllDemand = async (id) => {
    const results = await apiGet(`/demand/${id}`);
    
    return results.data;
}

export const deleteDemand = async (id,accountId) => {
    await apiDelete(`/demand/${id}/${accountId}`);
}
