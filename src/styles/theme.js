import { createMuiTheme } from '@material-ui/core/styles';
import {bluePrimary,blueSecondary, yellowPrimary } from './colors'

const font =  "'Heebo', sans-serif";

 const theme = createMuiTheme({
	 palette:
		 {
		 	common: {
			    black:"#000",
				 white:"rgba(255, 255, 255, 1)"
		    },
			 background:{
		 		paper:"#fff",
				 default:"rgba(240, 240, 240, 1)"
			 },
			 primary:{
		 		light:"rgba(163, 163, 163, 1)",
				 main:"rgba(0, 113, 206, 1)",
				 dark:"rgba(4, 30, 66, 1)",
				 contrastText:"#fff"
			 },
			 secondary:{
		 		light:"rgba(69, 171, 25, 1)",
				 main:"rgba(255, 194, 32, 1)",
				 dark:"rgba(0, 0, 0, 1)",
				 contrastText:"#fff"
			 },
			 error:{
		 		light:"#e57373",
				 main:"#f44336",
				 dark:"#d32f2f",
				 contrastText:"#fff"
			 },
			 text:{
		 		 primary:"rgba(0, 0, 0, 0.87)",
				 secondary:"rgba(0, 0, 0, 0.54)",
				 disabled:"rgba(0, 0, 0, 0.38)",
				 hint:"rgba(0, 0, 0, 0.38)"
		 	}
		 },
	 typography: {
		 fontFamily: [
		 	font,
			 '-apple-system',
			 'BlinkMacSystemFont',
			 '"Segoe UI"',
			 'Roboto',
			 '"Helvetica Neue"',
			 'Arial',
			 'sans-serif',
			 '"Apple Color Emoji"',
			 '"Segoe UI Emoji"',
			 '"Segoe UI Symbol"',
		 ].join(','),
		 button:
			 {textTransform: "none"}
	 },
 });
export default theme;
