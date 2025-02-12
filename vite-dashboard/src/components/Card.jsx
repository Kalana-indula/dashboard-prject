const Card = (props) => {
    return (
        <>
            <div className="w-[250px] h-[250px] border-solid border-blue-900 border-[3px]
                            ml-[10px] mr-[10px]
                          flex flex-col items-center justify-center
                          rounded-[20px]
                          hover:shadow-blue-950
                          transition-all duration-300
                          shadow-lg
                          relative">
                <img src={props.image} alt="logo" className="h-[150px] w-[150px] object-cover" />
                <div className="absolute bottom-[20px]">
                    {props.title}
                </div>
            </div>
        </>
    );
};

export default Card;