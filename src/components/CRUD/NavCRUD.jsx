import React from 'react';
import '../../scss/components/CRUD/_navCRUD.scss';
// import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

const NavCRUD = () => {
	return (
		<section className='navCRUD'>
			<NavLink to='/productos' className='enlace'>
				Productos
			</NavLink>

			<NavLink to='/usuarios' className='enlace'>
				Usuarios
			</NavLink>
		</section>
	);
};

export default NavCRUD;
