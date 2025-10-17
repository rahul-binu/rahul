import { Navigate, Outlet } from 'react-router-dom';

function MainLayout() {

    return (
        <div>
            {/* <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} /> */}
            <div >
                {/* <Header collapsed={collapsed} /> */}
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default MainLayout;