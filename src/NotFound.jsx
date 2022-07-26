import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
        <h1>Oops!</h1>
        <h2>Error 404</h2>
        <p>Sorry, This page cannot be found!</p>
        <Link to="/">Back to the homepage...</Link>
    </div>
     );
}
 
export default NotFound;