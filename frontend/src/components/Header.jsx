import React from 'react'

 import {FaSignInAlt,FaSignOutAlt} from 'react-icons/fa'
 import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
<div className="log">
    <Link to='/'>agriculture  Commodity Exchange</Link>
</div>
<ul>
    <li>
       <Link to='/login'>
           <FaSignInAlt/>Login
           </Link> 
    </li>
    <li>
       <Link to='/register'>
           <FaSignOutAlt/>Register
           </Link> 
    </li>
</ul>
    </div>
  )
}

export default Header