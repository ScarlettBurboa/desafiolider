import {makeStyles} from '@material-ui/core/styles';
import {bluePrimary, yellowPrimary} from './colors'
const useStyles = makeStyles(theme => ({
	logoLider:{
		marginTop:10,
	},
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	search: {
		position: 'relative',
		borderRadius: 20,
		backgroundColor: '#fff',
		'&:hover': {
			backgroundColor: '#fff',
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		marginTop: 15,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		color: 'rgba(0,0,0,0.4)',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
		width: '100%',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		color: 'rgba(0,0,0,0.5)',
		[theme.breakpoints.up('md')]: {
			width: '100%',
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
		marginTop: 10,
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	//categories
	container:{
		backgroundColor:'red',
	},
	notificationCircle:{
		borderRadius: '50%',
		backgroundColor: yellowPrimary,
		width: 24,
		height: 24,
		color: bluePrimary,
		fontWeight: 600,
	}
}));

export default useStyles;
