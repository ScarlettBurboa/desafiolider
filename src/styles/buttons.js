import { withStyles} from '@material-ui/core/styles';
import {greenColour, blueSecondary} from "./colors";
import {Button} from "@material-ui/core";

export const ColorButtonGreen = withStyles((theme) => ({
	root: {
		color: theme.palette.getContrastText(greenColour),
		backgroundColor: greenColour,
		'&:hover': {
			backgroundColor: greenColour,
		},
		typography: {
			button: {
				textTransform: 'none'
			}
		}
	},
	label:{
		color: 'white'
	}

}))(Button);
export const ColorButtonBlue = withStyles((theme) => ({
	root: {
		color: theme.palette.getContrastText(blueSecondary),
		backgroundColor: blueSecondary,
		'&:hover': {
			backgroundColor: blueSecondary,
		},
		typography: {
			button: {
				textTransform: 'none'
			}
		}
	},
	label:{
		color: 'white'
	}

}))(Button);
