import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../../components/Navbar';
import Sidebar from '../../../../components/Sidebar';

const SignUp = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />

                    <div className="container pt-3">
                        <h1 className=" text-center">Editar informações</h1>
                        <h6 className="text-center">Administrador</h6>
                        <div className="d-flex flex-column h-100 pt-3">
                            <form>
                                <div className="form-group">
                                    <label>Nome completo</label>
                                    <input type="text" className="form-control" disabled></input>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" disabled></input>
                                </div>
                                <div className="row">
                                    <div className="form-group col-lg-5">
                                        <label>Endereço</label>
                                        <input type="text" className="form-control" required></input>
                                    </div>
                                    <div className="form-group col-lg-1">
                                        <label>Numero</label>
                                        <input type="number" className="form-control" required></input>
                                    </div>
                                    <div className="form-group col-lg-3">
                                        <label>Bairro</label>
                                        <input type="text" className="form-control" required></input>
                                    </div>
                                    <div className="form-group col-lg-3">
                                        <label>CEP</label>
                                        <input type="text" className="form-control" required></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-lg-6 col-sm-12">
                                        <label>Telefone fixo</label>
                                        <input pattern="[0-9]{2} [0-9]{4}-[0-9]{4}" placeholder="DD XXXXX-XXXX" type="tel" className="form-control" required></input>
                                    </div>
                                    <div className="form-group col-lg-6 col-sm-12">
                                        <label>Telefone celular</label>
                                        <input pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" placeholder="DD XXXXX-XXXX" type="tel" className="form-control" required></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-lg-6 col-sm-12">
                                        <label>Password</label>
                                        <input type="password" className="form-control"></input>
                                    </div>
                                    <div className="form-group col-lg-6 col-sm-12">
                                        <label>Password confirmation</label>
                                        <input type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-3">
                                    <button className="btn btn-danger text-warning btn-round">Salvar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>);
};

export default SignUp;