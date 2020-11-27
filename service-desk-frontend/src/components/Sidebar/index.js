import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './styles.css';
import { connect } from 'react-redux';
import { signOut } from '../../actions/accountActions'; 
const Sidebar = ({ signOut, account }) => {

    if(!account){
        return <Redirect to="/"/>
    }

    const signOutHandler = (e) => {
        e.preventDefault();
        signOut();

    };

    return (
        <>
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                <div class="sidebar-sticky">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Menu</span>
                                <a class="d-flex align-items-center text-muted" href="#">
                                    <span data-feather="plus-circle"></span>
                                </a>
                            </h6>
                        </li>
                        <li class="nav-item">
                            <Link to="/client/createservice" class="nav-link" href="#">
                                <span data-feather="users"></span>
                                            Criar chamado
                                    </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/client/services" class="nav-link" href="#">
                                <span data-feather="bar-chart-2"></span>
                                            Meus chamados
                                    </Link>
                        </li>
                    </ul>

                    <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Perfil</span>
                        <a class="d-flex align-items-center text-muted" href="#">
                            <span data-feather="plus-circle"></span>
                        </a>
                    </h6>
                    <ul class="nav flex-column mb-2">
                        <li class="nav-item">
                            <Link to="/client/myData" class="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                            Meus dados
                                    </Link>
                        </li>
                        <li class="nav-item">
                            <button onClick={signOutHandler} class="nav-link btn btn-clear" href="#">
                                <span data-feather="file-text"></span>
                                            Sair
                                    </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

const mapStateToProps = (state) => {
    return { account: state.account.account };
}

export default connect(mapStateToProps, { signOut }) (Sidebar);