import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <>
            <p>MENU</p>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout;