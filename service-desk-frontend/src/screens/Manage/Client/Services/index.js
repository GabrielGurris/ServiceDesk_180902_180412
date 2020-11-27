import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../../components/Navbar';
import Sidebar from '../../../../components/Sidebar';
import { getAllDemand, deleteDemand } from '../../../../actions/demandActions';
import { getAllIncident, deleteIncident } from '../../../../actions/incidentActions';
import {getAccount} from '../../../../helpers/account';

const ServiceDesk = () => {

    useEffect(()=>{
        getAllData();
    },[]);

    const [incidents,setIncidents] = useState([]);
    const [demand,setDemand] = useState([]);

    const getAllData = async () => {
        const account = getAccount();

        const incidentsApi = await getAllIncident(account.id);
        setIncidents(incidentsApi);

        const demandApi = await getAllDemand(account.id);
        setDemand(demandApi);
    }

    const deleteRecordIncident = async (id) => {
        const account = getAccount();

        await deleteIncident(id,account.id);

        getAllData();
    }

    const deleteRecordDemand = async (id) => {
        const account = getAccount();

        await deleteDemand(id,account.id);

        getAllData();
    }

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10">
                        <div className="text-center mt-3 mb-5">
                            <h1>Meus chamados</h1>
                        </div>
                        <table className="table mb-5">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Resumo</th>
                                    <th scope="col">Descrição</th>
                                    <th scope="col">Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                               {incidents?.map(incident=>(
                                         <tr key={incident.id}>
                                            <th scope="row">{incident.id}</th>
                                            <td>{incident.resumo}</td>
                                            <td>{incident.descricao}</td>
                                            <td><button onClick={()=>deleteRecordIncident(incident.id)} className="btn btn-danger">Remover</button></td>
                                        </tr>
                               ))}
                               {demand?.map(demandApi=>(
                                         <tr key={demandApi.id}>
                                            <th scope="row">{demandApi.id}</th>
                                            <td>{demandApi.resumo}</td>
                                            <td>{demandApi.descricao}</td>
                                            <td><button onClick={()=> deleteRecordDemand(demandApi.id)} className="btn btn-danger">Remover</button></td>
                                        </tr>
                               ))}
                            </tbody>
                        </table>

                    </main>
                </div>
            </div>


        </>
    );
};

export default ServiceDesk;