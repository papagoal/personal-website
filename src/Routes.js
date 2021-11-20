import React from 'react';
import './Asserts/App.css';

import { Switch, Route } from 'react-router-dom';
import About from "./Components/About";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Guides from "./Components/Guides";

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
