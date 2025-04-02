const Card = (props) => {
    return (
        <>
            <div className="card">
                <img src={props.image} alt="logo"/>
                <div>
                    {props.title}
                </div>
            </div>
        </>
    );
};

export default Card;