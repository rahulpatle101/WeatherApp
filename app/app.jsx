import React from 'react'
import ReactDOM from 'react-dom'
import Bootstrap from 'bootstrap.css'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import Examples from 'Examples'
import Main from 'Main'
import Weather from 'Weather'
import About from 'About'
import css from 'style-loader!css-loader!less-loader!applicationStyles'


var App = React.createClass({
	render: function() {
		return (
			<Router history={hashHistory}>
		    <Route path="/" component={Main}>
		      <Route path="about" component={About}/>
		      <Route path="examples" component={Examples}/>
		      <IndexRoute component={Weather}/>
		    </Route>
		  </Router>
		)
	}
})

const appDOM = document.getElementById('app')
//render() - a function from ReactDOM package
ReactDOM.render(
	<App />, appDOM
);
