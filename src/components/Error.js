import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);  
    return (
        <div>
            <h1>Error {err.status} : {err.statusText} </h1>
            <h2>Oops!!! Something wrong</h2>
           
        </div>
    );
};

export default Error;