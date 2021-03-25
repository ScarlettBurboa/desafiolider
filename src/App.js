import { ThemeProvider } from '@material-ui/styles';
import Header from "./components/header/Header";
import theme from './styles/theme'
import Categories from "./components/header/Categories";
import Body from "./components/Body";

function App() {
  return (
	  <ThemeProvider theme={theme}>
		  <div className="App">
			  <div >
				  <Header />
				  <Categories />
			  </div>
			  <Body />
		  </div>
	  </ThemeProvider>

  );
}

export default App;
