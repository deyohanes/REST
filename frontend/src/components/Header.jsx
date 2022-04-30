import React from 'react'

 import {FaSignInAlt,FaSignOutAlt} from 'react-icons/fa'
 import {Link} from 'react-router-dom';

function Header() {
  return (
    <Header className='header'>
<div className="log">
    <Link to='/'>Home</Link>
</div>
<ul>
    <li>
       <Link to='/login'>
           <FaSignInAlt/>Login
           </Link> 
    </li>
    <li>
       <Link to='/login'>
           <FaSignOutAlt/>Register
           </Link> 
    </li>
</ul>
    </Header>
  )
}

export default Header