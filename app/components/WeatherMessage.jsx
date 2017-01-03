import React from 'react'

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center page-title">It is {temp} (F) in {location}!</h3>
  )
};

module.exports = WeatherMessage;
