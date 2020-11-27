import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/facens.png'
import './styles.css';

const Main = () => {
    return (
        <>
            <div className="row bg-danger">
                <div className="col-12">
                    <h1 className="text-center mt-5">Bem vindo ao Service-Desk</h1>
                </div>
                <div className="row ml-auto mr-auto mt-5 mb-5 align-items-center">
                    <div className="col-lg-6 col-sm-12 col-md-6 grow">
                        <Link to="/sign-up" className="text-dark text-decoration-none">
                            <div id="bcg" className="container text-center">
                                <h1 className="pt-3 pb-2">Cadastre-se<br /></h1>
                                <h5 className="pb-3">Você não possui uma conta? <br />Clique aqui</h5>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-sm-12 grow">
                        <Link to="/sign-in" className="text-dark text-decoration-none">
                            <div id="bcg" className="container text-center">
                                <h1 className="pt-3 pb-2">Login<br /></h1>
                                <h5 className="pb-3">Você já possui uma conta? <br /> Clique aqui</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <img src={img} width="150" />
            </div>
            <footer className="mt-5">
                <p class="text-muted text-center">&copy; GM - 2020</p>
            </footer>
        </>);
};

export default Main;