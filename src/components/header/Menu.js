import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import useStyles from "../../styles/makeStyleGlobal";
import clsx from 'clsx';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import {ColorButtonBlue} from "../../styles/buttons";

const MenuLateral = () => {
	const classes = useStyles();
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});
	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setState({...state, [anchor]: open});
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom',
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
						<ListItemText primary={text}/>
					</ListItem>
				))}
			</List>
			<Divider/>
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
						<ListItemText primary={text}/>
					</ListItem>
				))}
			</List>
		</div>
	);
	return (
		<div>
			<ColorButtonBlue
				variant="contained"
				color={"primary"}
				startIcon={<MenuIcon />}
				style={{marginTop: -20}}
				onClick={toggleDrawer('left', true)}
			>
				Categorías
			</ColorButtonBlue>
				<Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
					{list('left')}
				</Drawer>
		</div>
	);
}

export default MenuLateral;
