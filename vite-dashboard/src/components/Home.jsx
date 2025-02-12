// Import the 'Link' component from 'react-router-dom' for navigation (use 'next/link' if using Next.js)
import { Link } from "react-router-dom";

// Import the 'Card' component to render individual cards
import Card from "./Card";

// Import the 'details' data, which is an array of objects containing card information
import details from "./details";

// Define the 'Home' component
const Home = () => {
    // Function to create a card component wrapped in a 'Link' for navigation
    const createCard = (details) => {
        return (
            // Wrap each card in a 'Link' component to make it clickable
            // The 'to' prop specifies the destination route (use 'href' if using Next.js)
            // The 'key' prop is required for React to efficiently manage the list of rendered components
            <Link to={`/department/${details.dptName}`} key={details.id}>
                {/* Render the 'Card' component and pass props for id, image, and title */}
                <Card
                    id={details.id}          // Pass the unique ID of the card
                    image={details.imgURL}   // Pass the image URL for the card
                    title={details.dptName}    // Pass the title of the card
                />
            </Link>
        );
    };

    console.log(details[0].division[0].link);

    return (
        // Main container for the Home component
        <div className="w-100vw h-[calc(100vh-200px)] bg-white pt-0 pb-0
                        flex justify-center items-center">
            {/* Map over the 'details' array and render a card for each item */}
            {details.map(createCard)}
        </div>
    );
};

// Export the 'Home' component as the default export
export default Home;