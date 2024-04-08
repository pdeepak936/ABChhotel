import React from "react";
import "./style.css";
import { Routes, Route, NavLink, Link, Outlet } from "react-router-dom";
import Card from "../card/card";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/index";
import axios from "axios";
import Alltask from "../alltask";
import NotAccepted from "../not_accepted";
import Scheduled from "../scheduled";
import Delayed from "../delayed";
import Completed from "../completed";
import Ongoing from "../ongoing";
import Ontime from "../ontime";
import Form from "../form/Form";
import Footer from "../footer/footer";

const Home = () => {
  return (
    <div className="container-flex">
      <div className="row">
        <div className="col">
          <div className="d-md-block d-lg-block d-sm-none">
            <Header />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="d-flex">
            <div
              className="col-lg-2 col-md-2 col-sm-0"
              style={{ height: "100%" }}
            >
              <Sidebar />
            </div>
            <div className="main-page col-lg-9 col-md-9 col-sm-12">
              <h2 className="task-title">Task of the day</h2>
              <nav className="all_task">
                <NavLink className="all_task_tab" to="notaccepted">
                  Not Accepted
                </NavLink>
                <Link className="all_task_tab" to="ongoing">
                  Ongoing
                </Link>
                <NavLink className="all_task_tab" to="scheduled">
                  Scheduled
                </NavLink>
                <NavLink className="all_task_tab" to="completed">
                  Completed
                </NavLink>
                <NavLink className="all_task_tab" to="delayed">
                  Delayed
                </NavLink>
                <NavLink className="all_task_tab" to="ontime">
                  Ontime
                </NavLink>
              </nav>
              <hr />
              <Routes>
                <Route path="/" element={<Alltask />} />
                <Route path="/notaccepted" element={<NotAccepted />} />
                <Route path="/scheduled" element={<Scheduled />} />
                <Route path="/delayed" element={<Delayed />} />
                <Route path="/completed" element={<Completed />} />
                <Route path="/ongoing" element={<Ongoing />} />
                <Route path="/ontime" element={<Ontime />} />
                <Route path="/taskform" element={<Form />} />
                <Route path="/form" element={<></>} />
              </Routes>

              {/* <div>
            <div className="">
              <div className="card-wrapper">
                <div className="row">
                    <Card />
                </div>
              </div>
            </div>
          </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="footer-container d-sm-block d-md-none d-lg-none align-items-end">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
