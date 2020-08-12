import React from 'react';
import './Asserts/css/App.css';

import { Switch, Route } from 'react-router-dom';
import About from "./Pages/About";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Guides from "./Pages/Guides";

function Routes() {
  return (
  	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/about" component={About} />
		<Route path="/blog" component={Blog} />
		<Route path="/guides" component={Guides} />
	</Switch>
  );
}

export default Routes;
