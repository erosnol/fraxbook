import { Link, NavLink } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <nav class="nav justify-content-end">
            <ul className='nav'>
                <li className='nav-item'>
                    <Link to='/Home' className='nav-link'>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <NavLink to='/Profile' className='nav-link'>
                        Profile
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/' className='nav-link'>
                        Sign out
                    </NavLink>
                </li>
            </ul>
           {props.user && <span>{props.user.username}</span>}
        </nav>
    )
}

export default NavBar