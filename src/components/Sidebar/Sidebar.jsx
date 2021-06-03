import "./Sidebar.css";

import React from "react";

import RouteLink from "./Link/RouteLink";
import logo from "../../assets/logo.png";
import { GiDiploma } from "react-icons/gi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdViewComfy } from "react-icons/md";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__navigation">
        <div style={{ listStyleType: "none", padding: 0 }}>
          <RouteLink exact name="Create Diploma" to="/" Icon={<GiDiploma />} />
          <RouteLink
            name="Validate Diploma"
            to="/validate"
            Icon={<IoShieldCheckmarkSharp />}
          />
          <RouteLink
            name="Blockchain"
            to="/blockchain"
            Icon={<MdViewComfy />}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
