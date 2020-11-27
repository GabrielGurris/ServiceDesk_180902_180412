import React from 'react';
import { demandCreate } from '../../../../actions/demandActions';
import Navbar from '../../../../components/Navbar';
import Sidebar from '../../../../components/Sidebar';
import {getAccount} from '../../../../helpers/account';
import { useHistory } from 'react-router-dom';

const Demand = () => {

    const history = useHistory();

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const account = getAccount();
        formData.append("id",account.id);
        const data = Object.fromEntries(formData);
        await demandCreate(data); 
        history.push("/client/services");
    }

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main role="main" id="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        <div className="text-center pt-2 pb-3">
                            <h1>Demanda</h1>
                        </div>
                        <form className="container" onSubmit={submitHandler}>
                            <div className="form-row align-items-center justify-content-center pt-4">
                                <label className="col-sm-2">Resumo: </label>
                                <div class="col-sm-10 col-lg-6">
                                    <input className="form-control" name="resumo" maxLength="144" placeholder="Max: 144 caracteres"></input>
                                </div>
                            </div>
                            <div className="form-row align-items-center justify-content-center pt-4">
                                <label className="col-sm-2">Descrição: </label>
                                <div class="col-sm-10 col-lg-6">
                                    <input className="form-control" name="descricao" maxLength="144" placeholder="144 caracteres"></input>
                                </div>
                            </div>
                            <div className="form-row align-items-center justify-content-center pt-4">
                                <label className="col-sm-2">Categoria: </label>
                                <div class="col-sm-10 col-lg-6">
                                    <input className="form-control" name="categoria" minLength="1" maxLength="1" placeholder="Min: 1 - Max: 9"></input>
                                </div>
                            </div>
                            <div className="form-row align-items-center justify-content-center pt-4">
                                <label className="col-sm-2">SubCategoria: </label>
                                <div class="col-sm-10 col-lg-6">
                                    <input className="form-control" name="subcategoria" minLength="1" maxLength="1" placeholder="Min: 1 - Max: 9"></input>
                                </div>
                            </div>
                            <div className="form-row align-items-center justify-content-center pt-4">
                                <label className="col-sm-2">Impacto: </label>
                                <div class="col-sm-10 col-lg-6">
                                    <input className="form-control" name="impacto" minLength="1" maxLength="1" placeholder="Min: 1 - Max: 9"></input>
                                </div>
                            </div>
                            <div className="form-row align-items-center justify-content-center pt-4">
                                <label className="col-sm-2">Urgencia: </label>
                                <div class="col-sm-10 col-lg-6">
                                    <input className="form-control" name="urgencia" minLength="1" maxLength="1" placeholder="Min: 1 - Max: 9"></input>
                                </div>
                            </div>
                            <div className="form-row justify-content-center pt-4 pb-5">
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Demand;