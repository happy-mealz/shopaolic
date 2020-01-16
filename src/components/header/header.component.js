import React from 'react';
import './header.style.scss';

import {createStructuredSelector} from 'reselect';

import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import {connect} from 'react-redux';

import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';

import CartIcon from '../card-icon/card-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header=({currentUser,hidden})=>(
	<div className="header">
		<Link to='/' className="logo-container">
			<Logo/>
		</Link>
		<div className="options">
		<Link className="option" to='/'>HOME</Link>
		<Link className="option" to='/shop'>SHOP</Link>
		{
			currentUser?
			(
			<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>)
			:(		
			<Link className="option" to='/sign-in-and-sign-up'>SIGN IN</Link>
			)
		}
		<CartIcon/>
		</div>
		{
	    
		hidden ?
		null:<CartDropdown/>
		}
	</div>
)


const mapStatetoProps =createStructuredSelector({
currentUser: selectCurrentUser,
hidden: selectCartHidden
});

export default connect(mapStatetoProps)(Header);
