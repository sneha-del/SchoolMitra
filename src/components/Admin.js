import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
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
                <h1 className="page-header">Admin Section</h1>
              </div>
            </div>

            <div className="panel-body">
              <div className="row">
                <div className="col-lg-6">
                  <form role="form">
                    <div className="form-group">
                      <label>Enter Date</label>

                      <input className="form-control"></input>
                    </div>
                    <div className="form-group">
                      <label>Add Title</label>
                      <input className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Add Description</label>
                      <textarea
                        className="form-control"
                        rows={6}
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <label>Add Steps</label>
                      <textarea
                        className="form-control"
                        rows={6}
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <label>Add Images</label>
                      <input type="file" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
                <div className="col-lg-6">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ marginTop: "25px" }}
                  >
                    Apply
                  </button>
                  <div
                    className="col-md-12 col-sm-12 col-xs-12"
                    style={{ marginTop: "10em" }}
                  >
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        List of features added
                      </div>
                      <div className="panel-body">
                        <div className="table-responsive">
                          <table className="table table-striped table-bordered table-hover">
                            <tbody>
                              <tr>
                                <td>
                                  HRMS feature{" "}
                                  <span
                                    style={{
                                      marginLeft: "240px",
                                      marginRight: "20px",
                                      color: "red",
                                    }}
                                  >
                                    Remove
                                  </span>
                                  <span style={{ color: "red" }}>Edit</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  HRMS feature{" "}
                                  <span
                                    style={{
                                      marginLeft: "240px",
                                      marginRight: "20px",
                                      color: "red",
                                    }}
                                  >
                                    Remove
                                  </span>
                                  <span style={{ color: "red" }}>Edit</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  HRMS feature{" "}
                                  <span
                                    style={{
                                      marginLeft: "240px",
                                      marginRight: "20px",
                                      color: "red",
                                    }}
                                  >
                                    Remove
                                  </span>
                                  <span style={{ color: "red" }}>Edit</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  HRMS feature{" "}
                                  <span
                                    style={{
                                      marginLeft: "240px",
                                      marginRight: "20px",
                                      color: "red",
                                    }}
                                  >
                                    Remove
                                  </span>
                                  <span style={{ color: "red" }}>Edit</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  HRMS feature{" "}
                                  <span
                                    style={{
                                      marginLeft: "240px",
                                      marginRight: "20px",
                                      color: "red",
                                    }}
                                  >
                                    Remove
                                  </span>
                                  <span style={{ color: "red" }}>Edit</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  HRMS feature{" "}
                                  <span
                                    style={{
                                      marginLeft: "240px",
                                      marginRight: "20px",
                                      color: "red",
                                    }}
                                  >
                                    Remove
                                  </span>
                                  <span style={{ color: "red" }}>Edit</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  HRMS feature{" "}
                                  <span
                                    style={{
                                      marginLeft: "240px",
                                      marginRight: "20px",
                                      color: "red",
                                    }}
                                  >
                                    Remove
                                  </span>
                                  <span style={{ color: "red" }}>Edit</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
