import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import CarHome from '../containers/CarHome';
import CarDetails from '../containers/CarDetails';


import { GlobalStyles } from "../styles/common";

const App = () => {
    return (
        <Fragment>
            <GlobalStyles />            
            <PageHeader />
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={CarHome} />
                    <Route path="/carDetails/:id" component={CarDetails} />
                </Switch>
            </BrowserRouter>            
            {/* <PageFooter /> */}
        </Fragment>
    )
}

export default App;

