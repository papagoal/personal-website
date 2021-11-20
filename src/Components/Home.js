import React, {Component} from 'react';
import '../Asserts/App.css';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

class Home extends Component {
	render() {
		return (
			<div>
				<header className="App-header">
					<p>Be Happy</p>
					<Button variant="contained"><Link to="./about">About me</Link></Button>
					<br />
					<Button variant="contained"><Link to="./blog">About me</Link></Button>
					<br />
					<Button variant="contained"><Link to="./guides">About me</Link></Button>
				</header>
			</div>
		);
	}
}

export default Home;
