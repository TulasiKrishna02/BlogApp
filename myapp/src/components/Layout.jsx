import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* Fixed Navbar */}
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: "#4b0082" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            Tulasi IT Blog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/post">
                  All Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/login">
                  Login
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Dynamic page content */}
      <div
        className="container"
        style={{ paddingTop: "100px", paddingBottom: "80px" }}
      >
        <Outlet />
      </div>

      {/* Fixed Footer */}
      <footer className="bg-dark text-white text-center py-3 fixed-bottom">
        &copy; {new Date().getFullYear()} Tulasi IT Blog. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
