import './App.css';
import Navbar from './pageFiles/Navbar.js';
import DataGrids from './DataGrids.js';
import AddUser from './pageFiles/AddUser.js';
import RegGrid from './pageFiles/RegGrid.js';
import EditUser from './pageFiles/EditUser.js';
import ViewUser from './pageFiles/ViewEmployee';
import Account from './pageFiles/Account.js'
import SignIn from './pageFiles/SignIn.js';

import Button from '@mui/material/Button';
import Link from 'react-router-dom';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {AuthContextProvider} from "./firebase/AuthContext";

function App() {
  return (
      <div>
      <AuthContextProvider>
        <Navbar/>
          <Routes>

              <Route
              exact path={'/account'}
              element={<Account/>}
              />

              <Route
                exact path = "/"
                element=<SignIn/>
              />

              <Route
                  exact path="/home"
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

      </AuthContextProvider>
      </div>
  );
}

export default App;
