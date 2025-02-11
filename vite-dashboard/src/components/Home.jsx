import Card from "./Card";
import details from "./details";

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
            <div className="w-100vw h-[calc(100vh-200px)] bg-white pt-0 pb-0
                flex justify-center items-center">

                    {details.map(createCard)}
            </div>
        </>
    );
}

export default Home;