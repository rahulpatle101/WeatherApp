import React from 'react'
import {Link, IndexLink} from 'react-router'

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function () {
    return (
      <div className="navbar navbar-default">
        <div className="row">
          <div className="col-md-8">
            <div className="navbar-header">
                <a className="navbar-brand">
                  Weather App
                </a>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
              </li>
              <li>
                <Link to="/about" activeClassName="active">About</Link>
              </li>
              <li>
                <Link to="/examples" activeClassName="active">Examples</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <form onSubmit={this.onSearch} className="navbar-form navbar-left">
              <div className="form-group">
                <input type="search" className="form-control" ref="search" placeholder="Search weather by city"/>
                <input type="submit" className="btn btn-primary ml" value="Get Weather" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Nav;
