import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, User, Rank } from "./pages";
import { Nav, NavItem, NavLink } from "reactstrap";

class App extends Component {
  render() {
    const Appstyle = {
      width: "400px",
      height: "400px",
      margin: "0 auto",
      backgroundColor: "white",
    };
    return (
      <div style={Appstyle}>
        <Router>
          <Nav tabs>
            <NavItem>
              <Link to="/">
                <NavLink>Home</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/user">
                <NavLink>User</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/rank">
                <NavLink>Rank</NavLink>
              </Link>
            </NavItem>
          </Nav>

          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/rank" component={Rank} />
        </Router>
      </div>
    );
  }
}

export default App;
