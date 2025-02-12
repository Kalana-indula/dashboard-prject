import { Link, useParams } from "react-router-dom";
import details from "./details";
import Card from "./Card";

const Department = () => {
    // Extract the dynamic parameter from the URL
    const { dptName } = useParams();

    // Find the department from the 'details' array that matches the dptName from the URL
    const department = details.find(department => department.dptName === dptName);

    // Function to create a card component wrapped in a 'Link' for navigation
    const createCard = (division) => {
        return (
            <Link to={`${division.link}`} key={division.dvName}>
                {/* Render the 'Card' component and pass props for id, image, and title */}
                <Card
                    id={division.dvName}          // Use division name or another unique identifier for key
                    image={department.imgURL}   // Use department image for all divisions
                    title={division.dvName}     // Division name as the title of the card
                />
            </Link>
        );
    };

    return (
        <>
            <div className="flex justify-center items-center">
                {/* Render division cards for the current department */}
                {department.division.map(createCard)}
            </div>
        </>
    );
}

export default Department;
