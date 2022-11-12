import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import img from "../../../images/LOGO.png";

const Header = () => {
  const {logOut, user} = useContext(AuthContext);

  const handleLogOut =() =>{
    logOut()
    .then(res => console.log(res))
    .catch(err => console.error(err))
  }

  return (
    <div>
      <div className="navbar bg-slate-700">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/services">Services</Link>
              </li>
              {user?.uid?
              <div className="flex flex-col">
                <li><Link to='/myReviews'>My Reviews</Link></li>
                <li><Link to='/addService'>Add Service</Link></li>
              </div>
              :
              <>
              </>
            }
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="flex">
            <img className="w-12 rounded-full hidden lg:flex" src={img} alt="" />
            <Link to="/"
              className="btn btn-ghost normal-case text-xl text-white"
            >
              ARTIHC
            </Link>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/services">Services</Link>
            </li>
            {user?.uid?
              <div className="flex items-center">
                <li><Link to='/myReviews'>My Reviews</Link></li>
                <li><Link to='/addService'>Add Service</Link></li>
              </div>
              :
              <>
              </>
            }
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.uid ?
          <>
          <p className="text-white mr-3">{user?.email}</p>
          <Link onClick={handleLogOut} className="btn">
          Log Out
        </Link>
          </>
        :
        <Link to="/login" className="btn">
            Login
          </Link>

          }
        </div>
      </div>
    </div>
  );
};

export default Header;
