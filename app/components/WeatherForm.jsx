import React from 'react'

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
      <div className="row text-center">
        <form onSubmit={this.onFormSubmit} className="col-md-6 col-centered">
          <input type="search" ref="location" className="form-control" placeholder="Search weather by city"/>
          <button className="btn btn-primary mt">Get Weather</button>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;
