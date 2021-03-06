import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ViewCustomer from './components/ViewCustomer';
// import AddCustomer from './AddCustomer';
import AddCustomer from './components/AddCustomer'


function App() {
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Movie Ticket Booking</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <Link className="nav-item" to="/">View Customers</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-item" to="/add">Add Customers</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
            </li>
            
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
            <AddCustomer />
          </Route>
          <Route path="/">
            <ViewCustomer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
