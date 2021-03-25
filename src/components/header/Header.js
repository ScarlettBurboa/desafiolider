import React, {useState} from 'react';
import {AppBar, Badge, Grid, IconButton, InputBase, Menu, MenuItem, Toolbar} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/More';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications'
import useStyles from "../../styles/makeStyleGlobal";
import MenuLateral from './Menu'
import {ColorButtonGreen, ColorButtonBlue} from '../../styles/buttons'

export default function PrimarySearchAppBar() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton aria-label="show 4 new mails" color="inherit">
					<Badge badgeContent={4} color="secondary">
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton aria-label="show 11 new notifications" color="inherit">
					<Badge badgeContent={11} color="secondary">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);
	return (
		<div className={classes.grow}>
			<AppBar position="static">
				<Toolbar>
					<Grid container spacing={3}>
						<Grid item xs={3}>
							<img src={'https://www.lider.cl/catalogo/images/lider-logo.svg'} width="152" height="35" alt="Lider" className={[classes.logoLider]}/>
							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="open drawer"
							>
								<MenuLateral />
							</IconButton>
						</Grid>
						<Grid item xs={6}>
							<div className={[classes.search]}>
								<div className={classes.searchIcon}>
									<SearchIcon />
								</div>
								<InputBase
									placeholder="¿Qué estás buscando?"
									classes={{
										root: classes.inputRoot,
										input: classes.inputInput,
									}}
									inputProps={{ 'aria-label': 'search' }}
								/>
							</div>
						</Grid>
						<Grid item xs={3}>
							<div className={classes.grow} />
							<div className={classes.sectionDesktop}>
								<ColorButtonGreen
									variant="contained"
									color={"primary"}
									className={classes.margin}
									style={{marginTop: 5}}
									startIcon={<ShoppingCartIcon />}
								>
									Supermercado
								</ColorButtonGreen>
								<ColorButtonBlue
									variant="contained"
									color={"primary"}
									className={classes.margin}
									style={{marginLeft: 10, marginTop: 5}}
									startIcon={<ShoppingCartOutlinedIcon />}
								>
									<span className={classes.notificationCircle}>3</span>
								</ColorButtonBlue>

							</div>
							<div className={classes.sectionMobile}>
								<IconButton
									aria-label="show more"
									aria-controls={mobileMenuId}
									aria-haspopup="true"
									onClick={handleMobileMenuOpen}
									color="inherit"
								>
									<MoreIcon />
								</IconButton>
							</div>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</div>
	);
}
