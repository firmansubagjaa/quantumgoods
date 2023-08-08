import { Link } from "react-router-dom";

export default function IsNotLogin() {
  return (
    <div className=" mx-3 flex">
      <Link to={`/login`} className="btn btn-outline btn-primary mr-3">
        Login
      </Link>
      <a className="btn btn-primary ">Sign Up</a>
    </div>
  );
}
