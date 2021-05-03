import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./sidebar";
import Dashboard from "./dashboard/dashboard";
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Userlist from "./userlist";
import Useredit from "./useredit";
import Usercreate from "./usercreate";
import Profile from "./profile";
import Editprofile from "./edit-profile";
import Topbar from "./topbar";

function App() {
  return (
    <>
      <Router>
        {" "}
        <div id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
             <Topbar></Topbar>
              <div class="container-fluid"></div>

              <Switch>
                <Route
                  path="/dashboard"
                  component={Dashboard}
                  exact={true}
                ></Route>
                <Route path="/users" component={Userlist} exact={true}></Route>
                <Route
                  path="/usercreate"
                  component={Usercreate}
                  exact={true}
                ></Route>
                <Route
                  path="/useredit/:id"
                  component={Useredit}
                  exact={true}
                ></Route>
                <Route
                  path="/profile"
                  component={Profile}
                  exact={true}
                ></Route>
                <Route
                  path="/edit-profile/:id"
                  component={Editprofile}
                  exact={true}
                ></Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
