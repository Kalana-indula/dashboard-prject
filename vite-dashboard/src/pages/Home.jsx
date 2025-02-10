import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
    return (
        <>
            <div className="app-body relative w-full h-screen">
                {/* creating header */}
                <div className="w-100vw h-[100px]">
                    <Header />
                </div>

                <div className="w-100vw h-[calc(100vh-200px)] bg-amber-200 pt-0 pb-0">
                    <h1 className="text-[40px]">Home Page</h1>
                </div>
                <div className="absolute bottom-0 w-full h-[100px]">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Home;

