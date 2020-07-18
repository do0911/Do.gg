import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, User, Rank } from "./pages";
import { Nav, NavItem, NavLink, Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <div>
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
          </div>
        </Router>
      </Container>
    );
  }
}

export default App;
