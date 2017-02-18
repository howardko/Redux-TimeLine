import React from "react";
import { Link } from "react-router";

export default class Nav extends React.Component {

  render() {
    return (
      <nav>
        <div>
            <Link to="login" >Login</Link>
        </div>
      </nav>
    );
  }
}
