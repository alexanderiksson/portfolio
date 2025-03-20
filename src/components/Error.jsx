const Error = ({ msg = "Something went wrong..." }) => {
    return (
        <div className="content">
            <p className="text-center">{msg}</p>
        </div>
    );
};

export default Error;
