import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import '../Asserts/css/App.css';
import {connect} from "react-redux";
import { updateApple } from "../reducer/marketReducer";

class About extends Component {
	render() {
		return (
			<div>
				<header className="App-header">
					<h2>About Me</h2>
				</header>
			</div>
		);
	}
}

const mapStateToProps = state => state
const dispatchToProps = dispatch => ({ dispatch })
export default connect(mapStateToProps, dispatchToProps)(About)
