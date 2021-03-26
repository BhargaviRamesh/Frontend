import './App.css';

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ViewAdmin from './components/ViewAdmin';
// import AddAdmin from './AddAdmin';
import AddAdmin from './components/AddAdmin'
import UpdateAdmin from './components/UpdateAdmin';


function App() {
  return (
    <Router>
      <div>
      {/* <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} > */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Movie Ticket Booking</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <Link className="nav-item" to="/">View Admins</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-item" to="/add">Add Admins</Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
            </li> */}
            
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          
        </div>

        
      </nav>


        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/add">
            <AddAdmin />
          </Route>
          <Route path="/update/:id" component={UpdateAdmin}/>
          <Route exact path="/">
            <ViewAdmin />
          </Route>
        </Switch>
        {/* </Typography>
          </Container>
      </React.Fragment> */}
      </div>
    </Router>
  );
}

export default App;