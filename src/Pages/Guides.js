import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import '../Asserts/css/guides.css'
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 140,
		width: 100,
	},
	control: {
		padding: theme.spacing(2),
	}
}))

function Guides() {
	const classes = useStyles()
	return (
		<div>
			<header className='guides-header'>
				<Grid container className={classes.root} spacing={4}>
					<Grid item xs={12}>
						<Grid container justify="center" spacing={4}>
							{[0, 1, 2, 3, 4, 5].map((value) => (
								<Grid key={value} item>
									<Paper className={classes.paper} />
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
				<p>Guides</p>
				<Button variant="contained"><Link to="./">Home Page</Link></Button>
			</header>
		</div>
	);
}

export default Guides;
