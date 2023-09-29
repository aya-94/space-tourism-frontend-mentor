import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
    const rootStyles = {
        flexGrow: 3
    }

    const mainStyles = {
        height: 'calc(100% - 136px)'
    }
    return (
        <div style={rootStyles}>
            <MainNavigation />
            <main style={mainStyles}>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout;