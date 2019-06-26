import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import CarHome from '../containers/CarHome';
import CarDetails from '../containers/CarDetails';
import NotFound from "./NotFound";

import { GlobalStyles, PageWrapper } from "../styles/CommonStyles";

const App = () => {
    return (
        <Fragment>
            <GlobalStyles />
            <PageWrapper>
                <PageHeader />
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={CarHome} />
                        <Route path="/carDetails/:id" component={CarDetails} />
                        <Route path="*" exact component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </PageWrapper>
            <PageFooter />
        </Fragment>
    )
}

export default App;

