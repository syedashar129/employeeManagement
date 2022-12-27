import './App.css';
import Navbar from './Navbar.js';
import DataGrids from './DataGrids.js';
import AddUser from './AddUser.js';
import RegGrid from './RegGrid.js';
import EditUser from './EditUser.js';
import ViewUser from './ViewEmployee';

import Button from '@mui/material/Button';
import Link from 'react-router-dom';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
      <div>
      <Router>
        <Navbar/>
          <Routes>
              <Route
                  exact path="/"
                  element = {<RegGrid/>}
              />
              <Route
                exact path="/addUser"
                element = {<AddUser/>}
              />
              <Route
                  exact path="/editUser/:id"
                  element = {<EditUser/>}
              />
              <Route
                  exact path={"/viewUser/:id"}
                  element = {<ViewUser/>}
              />

          </Routes>
      </Router>


      </div>
  );
}

export default App;
