import { Outlet } from 'react-router-dom';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default MainLayout;