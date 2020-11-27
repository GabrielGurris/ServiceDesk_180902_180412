import React,{useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../../components/Navbar/index';
import { connect } from 'react-redux';
import { signIn } from '../../actions/accountActions';


const SignIn = (props) => {
    const {account, signIn} = props;

    const [signInError,setSignInError] = useState(false);

    if(account){
        return <Redirect to="/client/createservice"/>
    }
    
    const submitHandler =  (e) =>{
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        signIn(data);
        setSignInError(true);
    }
    return (
        <>
            <Navbar />
            <div className="container h-100 pt-3">
                <h1 className="text-center">Login</h1>
                <div className="d-flex flex-column h-100 pt-3">
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control"></input>
                        </div>
                        {signInError && !account &&  <label>Usuário e/ou senha incorreto</label>}
                        <div className="row justify-content-center mt-4">
                            <button className="btn btn-danger btn-round text-warning">Entrar</button>
                        </div>
                    </form>
                    <div className="container text-center fixed-bottom pb-5">
                        <div className="text-muted">Não possui uma conta?</div>
                        <Link to='/sign-up' className="text-warning">Criar conta</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return { account: state.account.account };
}

export default connect(mapStateToProps, {signIn})(SignIn);