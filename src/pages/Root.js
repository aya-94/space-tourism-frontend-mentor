import { Outlet, useLocation } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import './root-styles.css';

const RootLayout = () => {

    const path = useLocation().pathname;
    const location = path.split("/")[1];
    return (
        <div className={`header ${location ? location : 'home'}`}>
            <MainNavigation />
            <main className="main-styles">
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout;