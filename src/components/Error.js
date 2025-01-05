import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="">
            <h1>Oopss!!!!</h1>
            <h2>Something Went Wrong!!</h2>
        </div>
    );
}

export default Error;