import { Outlet } from "react-router-dom"; // Import Outlet
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = () => {
    return (
        <>
            <div className="app-body">
                {/* Creating Header */}
                <div className="top">
                    <Header />
                </div>
                             
                {/* Main Content Area */}
                <div className="middle">
                    {/* Render the nested route content here */}
                    <Outlet />
                </div>

                {/* Footer */}
                <div className="bottom">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default HomePage;
