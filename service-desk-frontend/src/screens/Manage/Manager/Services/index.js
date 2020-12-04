import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Sidebar from "../../../../components/Sidebar";
import { PieChart } from "react-minimal-pie-chart";
import { getAllDemand, deleteDemand } from "../../../../actions/demandActions";
import {
  getAllIncident,
  deleteIncident,
} from "../../../../actions/incidentActions";
import { getAccount } from "../../../../helpers/account";
import "./styles.css";

const ServiceDesk = () => {
  useEffect(() => {
    getAllData();
  }, []);

  const [incidents, setIncidents] = useState([]);
  const [demand, setDemand] = useState([]);

  const getAllData = async () => {
    const account = getAccount();

    const incidentsApi = await getAllIncident(account.id);
    setIncidents(incidentsApi);

    const demandApi = await getAllDemand(account.id);
    setDemand(demandApi);
  };

  const getPercentageForDemand = () => {
    const total = demand.length + incidents.length;

    return ((demand.length / total) * 100).toFixed(2);
  };

  const getPercentageForIncidents = () => {
    const total = demand.length + incidents.length;

    return ((incidents.length / total) * 100).toFixed(2);
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10">
            <div className="text-center mt-3">
              <h1>Meus chamados</h1>
            </div>
            <div className="row">
              <div className="col-6" id="mainn">
                <PieChart
                  radius={30}
                  data={[
                    {
                      title: `Demanda(${demand.length})`,
                      value: demand.length,
                      color: "orchid",
                    },
                    {
                      title: `Incidente(${incidents.length})`,
                      value: incidents.length,
                      color: "red",
                    },
                  ]}
                  label={({ dataEntry }) => dataEntry.title}
                />
              </div>
              <div className="col-6 mt-auto mb-auto">
                <ul>
                  <li id="demanda">{`Demanda(${getPercentageForDemand()}%)`}</li>
                  <li id="incidente">{`Incidente(${getPercentageForIncidents()}%)`}</li>
                </ul>
              </div>
            </div>
            <table className="table mb-5">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Resumo</th>
                  <th scope="col">Descrição</th>
                </tr>
              </thead>
              <tbody>
                {incidents?.map((incident) => (
                  <tr key={incident.id}>
                    <th scope="row">{incident.id}</th>
                    <td>{incident.resumo}</td>
                    <td>{incident.descricao}</td>
                  </tr>
                ))}
                {demand?.map((demandApi) => (
                  <tr key={demandApi.id}>
                    <th scope="row">{demandApi.id}</th>
                    <td>{demandApi.resumo}</td>
                    <td>{demandApi.descricao}</td>
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
