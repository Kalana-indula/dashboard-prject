import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";

const HomePage = () => {

    return (
        <>
            <div className="app-body relative w-full h-screen">
                {/* creating header */}
                <div className="w-100vw h-[100px]">
                    <Header />
                </div>

                <div className="w-100vw h-[calc(100vh-200px)] bg-white pt-0 pb-0
                flex justify-center items-center">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </div>
                <div className="absolute bottom-0 w-full h-[100px]">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default HomePage;

