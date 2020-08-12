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
					<p>I am Dan</p>
					{this.props.market.apple}
					<br />
					<button onClick={() => {this.props.dispatch(updateApple('2'))}}>Change Number</button>
					<br />
					<Button variant="contained"><Link to="./">Home Page</Link></Button>
				</header>
			</div>
		);
	}
}

const mapStateToProps = state => state
const dispatchToProps = dispatch => ({ dispatch })
export default connect(mapStateToProps, dispatchToProps)(About)
