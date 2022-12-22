
import logo from '../../images/Logo.svg'
import React, { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/UserContext';
const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);
    
    const handleSignOut = () => {
        signOutUser()
            .then(() => {

            })
            .catch(err => {
                console.error(err);
            })
    }
    return (
        <nav className='nav-des'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div >
                <Link to='/' className='nav-menu'>Shop</Link>
                <Link to="/orders" className='nav-menu'>Orders</Link>
                <Link to="/about" className='nav-menu'>About</Link>
                <Link to="/Inventory" className='nav-menu'>Inventory</Link>

                

                {
                    user?.uid ?
                        <button onClick={handleSignOut} className='log-out'>Sign Out</button>
                        :
                        <>
                            <Link to="/login" className='nav-menu'>Login</Link>
                            <Link to="/signup" className='nav-menu'>Signup</Link>
                        </>
                }
            </div>
        </nav>
    );
};

export default Header;