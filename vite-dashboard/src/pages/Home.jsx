import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "../components/Card";
import details from "../components/details";

const Home = () => {

    //create a function to inject available details
    const createCard = (details) => {
        return (
            <>
                <Card
                    id={details.id}
                    image={details.imgURL}
                    title={details.title}
                />
            </>
        );
    }
    return (
        <>
            <div className="app-body relative w-full h-screen">
                {/* creating header */}
                <div className="w-100vw h-[100px]">
                    <Header />
                </div>

                <div className="w-100vw h-[calc(100vh-200px)] bg-white pt-0 pb-0
                flex justify-center items-center">
                        {/* Create a map to inject all available cards on home component*/}
                        {details.map(createCard)}
                </div>
                <div className="absolute bottom-0 w-full h-[100px]">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Home;

