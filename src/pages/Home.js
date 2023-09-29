import { NavLink } from 'react-router-dom';

import classes from './Home.module.css';

const HomePage = () => {
    return ( 
        <>
            <div className={classes.container}>
                <div className={classes.main}>
                    <span>SO, YOU WANT TO TRAVEL TO</span>
                    <h1>SPACE</h1>
                    <p>
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you a
                    truly out of this world experience! 
                    </p>
                </div>
                <div className={classes.explore}>
                    <span><NavLink to="/destination">EXPLORE</NavLink></span>
                </div>
            </div>

        </>
     );
}
 
export default HomePage;