import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import SignIn from './screens/Sign-in';
import SignUp from './screens/Sign-up';
import ClientServices from './screens/Manage/Client/Services/index';
import ManagerServices from './screens/Manage/Manager/Services/index'; 
import ManagerData from './screens/Manage/Manager/Data/index'; 
import CreateService from './screens/Create/index';
import ClientIncident from './screens/Create/Type/Incident/index';
import ClientDemand from './screens/Create/Type/Demand/index';
import ClientData from './screens/Manage/Client/Data/index'; 


import Main from './screens/Main/index';

const App = () => {
    return(//BrowserRouter- Cria as rotas, Switch- Navega entre elas
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Main} exact></Route>
                    <Route path="/sign-in" component={SignIn}></Route>
                    <Route path="/sign-up" component={SignUp}></Route>
                    <Route path="/client/createservice" component={CreateService}></Route>                  
                    <Route path="/client/incident" component={ClientIncident}></Route>
                    <Route path="/client/demand" component={ClientDemand}></Route>
                    <Route path="/client/services" component={ClientServices}></Route>
                    <Route path="/client/myData" component={ClientData}></Route>
                    <Route path="/manager/myData" component={ManagerData}></Route>
                    <Route path="/manager/services" component={ManagerServices}></Route>
                </Switch>
            </div>
        </BrowserRouter>      
    );
};

export default App;

