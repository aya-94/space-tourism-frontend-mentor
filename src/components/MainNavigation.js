import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return ( 
        <header className={classes.header}>
            <div className={classes.logo}></div>
            <nav>
                
                <ul className={classes.list}>
                <div className={classes.line}></div>
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                            end>
                            <span>00</span> HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/destination"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                            >
                            <span>01</span> DESTINATION
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/crew"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                            >
                            <span>02</span> CREW
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/technology"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                            >
                            <span>03</span> TECHNOLOGY
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default MainNavigation;