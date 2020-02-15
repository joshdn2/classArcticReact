import React from 'react';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bs from 'react-bootstrap';
import HeaderContainer from './header-container';
import FooterContainer from './footer-container';
import LeftTab from './left-tab';
import RightTab from './right-tab';
import HomeTab from './homeTab';
import HelpTab from './helpTab';
import AboutTab from './aboutTab';
import ProdDetails from './prod-details';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <bs.Container className="px-0 flex-column" fluid>
        <bs.Row  className="darkdark1 flex-grow-0 flex-shrink-0">
          <bs.Col>
            <HeaderContainer />
          </bs.Col>
        </bs.Row>
        <bs.Row  className="flex-grow-1">
          <bs.Col md="2" xs="12" className="success1">
            <LeftTab/>
          </bs.Col>
          <bs.Col md="8" className="oops1" style={{backgroundColor:"#f2f2f2"}}>
            <Switch>
              <Route path="/about">
                <AboutTab />
              </Route>
              <Route path="/help">
                <HelpTab />
              </Route>
              <Route path="/product">
                <ProdDetails />
              </Route>
              <Route path="/">
                <HomeTab />
              </Route>
            </Switch>
          </bs.Col>
          <bs.Col md="2" className="success1">
            <RightTab/>
          </bs.Col>
        </bs.Row>
        <bs.Row  className="darkdark1">
          <bs.Col>
            <FooterContainer/>
          </bs.Col>
        </bs.Row>
      </bs.Container>
    </Router>
  );
}

export default App;
