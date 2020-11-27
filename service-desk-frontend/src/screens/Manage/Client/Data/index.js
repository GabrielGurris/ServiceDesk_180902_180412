import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../../components/Navbar';
import Sidebar from '../../../../components/Sidebar';
import {getAccount} from '../../../../helpers/account';
import { get } from '../../../../actions/accountActions';

const SignUp = () => {

    const [user,setUser] = useState({});

    useEffect(()=>{
        getAllData();
    },[]);

    const getAllData = async () => {
        const account = getAccount();

        const accountApi = await get(account.id);
        
        setUser(accountApi.data);
    }

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />

                    <div className="container pt-3">
                        <h1 className=" text-center">Minhas informações</h1>
                        <h6 className="text-center">Cliente</h6>
                        <div className="d-flex flex-column h-100 pt-3">
                            <form>
                                <div className="form-group">
                                    <label>Nome completo</label>
                                    <input value={user?.name} type="text" name="name" className="form-control" disabled></input>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={user?.email} type="email" name="email" className="form-control" disabled></input>
                                </div>
                                <div className="row">
                                    <div className="form-group col-lg-5">
                                        <label>Endereço</label>
                                        <input value={user?.address} type="text" className="form-control" disabled></input>
                                    </div>
                                    <div className="form-group col-lg-1">
                                        <label>Numero</label>
                                        <input value={user?.naddress} type="number" className="form-control" disabled></input>
                                    </div>
                                    <div className="form-group col-lg-3">
                                        <label>Bairro</label>
                                        <input value={user?.neighborhood} type="text" className="form-control" disabled></input>
                                    </div>
                                    <div className="form-group col-lg-3">
                                        <label>CEP</label>
                                        <input value={user?.cep} type="text" className="form-control" disabled></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-lg-6 col-sm-12">
                                        <label>Telefone fixo</label>
                                        <input value={user?.phone1} pattern="[0-9]{2} [0-9]{4}-[0-9]{4}" placeholder="DD XXXXX-XXXX" type="tel" className="form-control" disabled></input>
                                    </div>
                                    <div className="form-group col-lg-6 col-sm-12">
                                        <label>Telefone celular</label>
                                        <input value={user?.phone2} pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" placeholder="DD XXXXX-XXXX" type="tel" className="form-control" disabled></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>);
};

export default SignUp;