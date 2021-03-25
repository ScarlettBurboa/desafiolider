import React, {useState} from 'react';
import {Paper, Grid} from '@material-ui/core';

import useStyles from "../styles/makeStyleGlobal";


export default function Body() {
	const classes = useStyles();

	return (
		<div className={classes.grow} style={{paddingRight:70, paddingLeft:70, marginTop:50,}}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>xs=12</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>xs=6</Paper>
				</Grid>
				<Grid item xs={9}>
					<Paper className={classes.paper}>xs=6</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
