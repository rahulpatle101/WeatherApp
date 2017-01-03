import React from 'react'
import { Link } from 'react-router'

var Examples = (props) => {
  return (
    <div className="col-md-6 col-centered">
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are few example locations to try out</p>
      <ol>
        <li>
          <Link to="/?location=Oakland">Oakland, CA</Link>
        </li>
        <li>
          <Link to="/?location=Mumbai">Mumbai, India</Link>
        </li>
      </ol>
    </div>
  )
};
module.exports = Examples;
