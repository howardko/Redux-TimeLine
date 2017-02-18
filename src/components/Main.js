import React from 'react'
import { Link } from 'react-router'
import Footer from "../layout/Footer";
import Nav from "../layout/Nav";

const Main = React.createClass({
  render(){
    return (
      <div>
        <h1>
          <Link to="/"> TimeLine </Link>
        </h1>
        <Nav />
        {React.cloneElement(this.props.children, this.props)}
        <Footer />
      </div>
    )
  }
})

export default Main