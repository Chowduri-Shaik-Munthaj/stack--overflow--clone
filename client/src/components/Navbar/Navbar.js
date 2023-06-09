import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo(StackOverflow).png'
import search from '../../assets/search-icon.svg'
import Avatar from '../../components/Avatar/Avatar'
const Navbar = () => {
    var User = null
    return(
        <nav className='main-nav'>
            <div className='navbar'>
               <Link to='/' className='nav-item nav-logo'>
                   <img src={logo} alt='logo' />
               </Link>
               <Link to='/' className='nav-item nav-btn'>About</Link>
               <Link to='/' className='nav-item nav-btn'>Products</Link>
               <Link to='/' className='nav-item nav-btn'>For Teams</Link>
               <form>
                     <input type="text" placeholder='search......'/>
                     <img  src={search} alt="search" width="18" className='search-icon' />
               </form>
               { User===null ?
                   <Link to='/Auth' className='nav-item nav-links'>Log in</Link>:
                   <>
                     <Link to='/'><Avatar >M</Avatar></Link>
                     <button className='nav-item nav-links'>Log Out</button>
                   </>   

                }
               
            </div>
        </nav>
    )
}
export default Navbar;