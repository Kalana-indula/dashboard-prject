import { useParams } from "react-router-dom";

const Department = () => {
    // Extract the dynamic parameter from the URL
    const { dptName } = useParams();

    return (
        <>
            <div>
                {/* Display department name */}
                {dptName}
            </div>
        </>
    );
}

export default Department;
