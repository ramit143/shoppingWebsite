import { Link } from "react-router-dom";

export function ShopperInvalid () {
    return (
        <div className="container-fluid">
        <h3 className="text-danger">Invalid</h3>
          <code>The entered UserId and Password is incorrect....!</code>
          <Link to="/login">Back to login page</Link>
        </div>
    )
}