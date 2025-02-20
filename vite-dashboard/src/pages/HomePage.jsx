import { Outlet } from "react-router-dom"; // Import Outlet
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = () => {
    return (
        <>
            <div className="app-body relative w-full h-screen">
                {/* Creating Header */}
                <div className="w-100vw h-[100px]">
                    <Header />
                </div>
                             
                {/* Main Content Area */}
                <div className="w-100vw h-[calc(100vh-200px)] bg-white pt-0 pb-0 flex justify-center items-center">
                    {/* Render the nested route content here */}
                    <Outlet />
                </div>

                {/* Footer */}
                <div className="absolute bottom-0 w-full h-[100px]">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default HomePage;
