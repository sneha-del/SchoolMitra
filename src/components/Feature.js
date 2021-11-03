import React from "react";
import { Link } from "react-router-dom";
import img1 from "../tree1.jpg";
import img2 from "../tree2.jpg";
import img3 from "../tree3.jpg";
import img4 from "../tree4.jpg";

const Feature = () => {
  return (
    <div>
      <div id="wrapper">
        <nav className="navbar navbar-default top-navbar" role="navigation">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".sidebar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to="/SchoolMitra" className="navbar-brand">
              School<span style={{ color: "orange" }}>Mitra</span>
            </Link>
          </div>
          <ul className="nav navbar-top-links navbar-right">
            <li className="dropdown">
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                aria-expanded="false"
              >
                <i className="fa fa-bell fa-fw" />{" "}
                <i className="fa fa-caret-down" />
              </a>
            </li>
            <li className="dropdown">
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                aria-expanded="false"
              >
                <i className="fa fa-user fa-fw" />{" "}
                <i className="fa fa-caret-down" />
              </a>
              <ul className="dropdown-menu dropdown-user">
                <li>
                  <a href="#">
                    <i className="fa fa-user fa-fw" /> User Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-gear fa-fw" /> Settings
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="#">
                    <i className="fa fa-sign-out fa-fw" /> Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <nav className="navbar-default navbar-side" role="navigation">
          <div className="sidebar-collapse">
            <ul className="nav" id="main-menu">
              <li>
                <Link to="/SchoolMitra">Admin Section</Link>
              </li>
              <li>
                <Link to="/add-features">Add Features</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row">
              <div className="col-md-12">
                <h1 className="page-header" style={{ color: "blue" }}>
                  Features
                </h1>
              </div>
            </div>

            <div className="panel-body">
              <div className="row">
                <div className="col-lg-4">
                  <form role="form">
                    <div className="form-group">
                      <label></label>
                      <input
                        className="form-control"
                        placeholder="search"
                      ></input>
                    </div>
                  </form>
                </div>
                <div className="col-lg-4">
                  <form role="form">
                    <div className="form-group">
                      <label>Enter Date</label>
                      <input className="form-control"></input>
                    </div>
                  </form>
                </div>
                <div className="col-lg-4">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ marginTop: "25px" }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h4>
                  HRMS Feature <small>(Uploaded on 20 October, 2021)</small>
                </h4>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h4>Steps</h4>
              </div>

              <ul style={{ listStyle: "none" }}>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed
                  do eiusmod{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed
                  do eiusmod{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed
                  do eiusmod{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed
                  do eiusmod{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed
                  do eiusmod{" "}
                </li>
              </ul>
            </div>
            <br />
            <br />
            <div class="row">
              <div class="col-md-2 col-sm-12 col-xs-12">
                <img src={img1} style={{ width: "12em", height: "12em" }} />
              </div>
              <div class="col-md-2 col-sm-12 col-xs-12">
                <img src={img2} style={{ width: "12em", height: "12em" }} />
              </div>
              <div class="col-md-2 col-sm-12 col-xs-12">
                <img src={img3} style={{ width: "12em", height: "12em" }} />
              </div>
              <div class="col-md-2 col-sm-12 col-xs-12">
                <img src={img4} style={{ width: "12em", height: "12em" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
