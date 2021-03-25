import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {Grid} from "@material-ui/core";
import '../../styles/categories.css'
// list of items
const list = [
	{ name: 'Juguetería', icon: 'https://www.lider.cl/catalogo/images/jugueteria.svg' },
	{ name: 'Mundo Bebé', icon: 'https://www.lider.cl/catalogo/images/bebe.svg'},
	{ name: 'Televisión', icon: 'https://www.lider.cl/catalogo/images/televisores.svg' },
	{ name: 'VideoJuegos', icon: 'https://www.lider.cl/catalogo/images/tecno.svg'},
	{ name: 'Celulares', icon: 'https://www.lider.cl/catalogo/images/telefonia.svg'},
	{ name: 'Computación', icon: 'https://www.lider.cl/catalogo/images/compu.svg' },
	{ name: 'Refrigeración', icon: 'https://www.lider.cl/catalogo/images/refrigeracion.svg' },
	{ name: 'Electrodomésticos', icon: 'https://www.lider.cl/catalogo/images/electrodomesticos.svg' },
	{ name: 'Dormitorio', icon: 'https://www.lider.cl/catalogo/images/dormi.svg' },
	{ name: 'Muebles', icon: 'https://www.lider.cl/catalogo/images/muebles.svg' },
	{ name: 'Decohogar', icon: 'https://www.lider.cl/catalogo/images/deco.svg'},
	{ name: 'Deporte', icon: 'https://www.lider.cl/catalogo/images/deportes.svg' },
	{ name: 'Aire Libre', icon: 'https://www.lider.cl/catalogo/images/aire.svg' },
	{ name: 'Automóvil', icon: 'https://www.lider.cl/catalogo/images/automoviles.svg' },
	{ name: 'Cuidado Personal', icon: 'https://www.lider.cl/catalogo/images/belleza.svg' },
	{ name: 'Accsesorios', icon: 'https://www.lider.cl/catalogo/images/accesorios.svg' }
];

// One item component
// selected prop will be passed
const MenuItem = ({content, selected}) => {
	const {name, icon} = content;
	return (
				<div className={`menu-item ${selected ? 'active' : ''}`}>
					<img src={icon} width="26" height="26" alt={name} className="icono"/>
					{name}
				</div>
			)
		;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
	list.map(el => {
		return (
			<div className="container-item" key={el.name}>
				<MenuItem content={el}  selected={selected} />
			</div>
			)
	});

const selected = 'item1';
class Categories extends Component {
	constructor(props) {
		super(props);
		// call it again if items count changes
		this.menuItems = Menu(list, selected);
	}

	state = {
		selected
	};

	onSelect = key => {
		this.setState({ selected: key });
	}

	render() {
		const { selected } = this.state;
		// Create menu from items
		const menu = this.menuItems;

		return (
			<Grid container spacing={3} className="container">
				<Grid item xs={12} className="marginLateral">
					<ScrollMenu
						data={menu}
						selected={selected}
						onSelect={this.onSelect}
						alignCenter={true}
						translate={0}
						hideArrows={true}
					/>
				</Grid>
			</Grid>

		);
	}
}
export default Categories;
