import React from 'react'

var About = (props) => {
  return (
    <div className="col-md-8 col-centered">
      <h1 className="text-center page-title">About</h1>
      <div className="">
        <p>This is a basic weather application build on React and React Bootstrap. Here are the tools used to built this app:</p>
      </div>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">Facebook React JS Framework</a>
        </li>
        <li>
          <a href="https://react-bootstrap.github.io">React Bootstrap</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map API</a>
        </li>
        <li>
          <a href="https://github.com/rahulpatle101/WeatherApp">Project Source Code</a>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
