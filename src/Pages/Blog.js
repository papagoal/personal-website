import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import '../Asserts/css/App.css';

class Blog extends Component {
	render() {
		return (
			<div>
				<header className="App-header">
					<p>Blog</p>
					<Button variant="contained"><Link to="./">Home Page</Link></Button>
				</header>
			</div>
		);
	}
}

export default Blog;
