import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
    return ( 
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" end>
                            00 HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/destination">
                            01 DESTINATION
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/crew">
                            02 CREW
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/technology">
                            03 TECHNOLOGY
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default MainNavigation;