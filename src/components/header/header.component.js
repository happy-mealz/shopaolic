import React from 'react';
import './header.style.scss';

import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header=({currentUser})=>(
	<div className="header">
		<Link to='/' className="logo-container">
			<Logo/>
		</Link>
		<div className="options">
		<Link className="option" to='/shop'>SHOP</Link>
		<Link className="option" to='/shop'>SHOP</Link>
		{
			currentUser?
			(
			<div class="option" onClick={()=>auth.signOut()}>SIGN OUT</div>)
			:(		
			<Link className="option" to='/sign-in-and-sign-up'>SIGN IN</Link>
			)
		}
		</div>
	</div>
)

export default Header;
