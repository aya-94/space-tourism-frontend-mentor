import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
    const styles = {
        overflowY: 'auto',
        height: 'calc(100% - 136px)'
    }
    return (
        <>
            <MainNavigation />
            <main style={styles}>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout;