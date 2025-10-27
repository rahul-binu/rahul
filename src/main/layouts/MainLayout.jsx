import { Navigate, Outlet } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';

function MainLayout() {

    return (

        <ThemeProvider>
            <div>
                {/* <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} /> */}
                <div >
                    {/* <Header collapsed={collapsed} /> */}
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>

        </ThemeProvider>
    );
}

export default MainLayout;