import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
        <>
                <nav class="navbar navbar-expand-md sticky-top bg-danger pt-2 pb-2">
                    <Link to="/" class="navbar-brand col-sm-4 col-md-2 mr-0 text-dark font-weight-bold" href="#">Service-desk</Link>
                   
                </nav>
        </>
        );
    };
};

export default Navbar;