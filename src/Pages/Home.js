import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import '../Asserts/css/App.css';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

import About from "./About";
import Blog from "./Blog";
import Guides from "./Guides";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: 'fill',
	},
}));

export default function FullWidthTabs() {
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
					variant="fullWidth"
					aria-label="full width tabs example"
				>
					<Tab label="Home" {...a11yProps(0)} />
					<Tab label="About" {...a11yProps(1)} />
					<Tab label="Blog" {...a11yProps(2)} />
					<Tab label="Guide" {...a11yProps(3)} />
				</Tabs>
			</AppBar>
			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				<TabPanel value={value} index={0} dir={theme.direction}>
					<header className="App-header">
						<p>Be Happy</p>
						<Button variant="contained"><Link to="./about">About</Link></Button>
						<br />
						<Button variant="contained"><Link to="./blog">Blog</Link></Button>
						<br />
						<Button variant="contained"><Link to="./guides">Guide</Link></Button>
					</header>
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					<About />
				</TabPanel>
				<TabPanel value={value} index={2} dir={theme.direction}>
					<Blog />
				</TabPanel>
				<TabPanel value={value} index={3} dir={theme.direction}>
					<Guides />
				</TabPanel>
			</SwipeableViews>
		</div>
	);
}
