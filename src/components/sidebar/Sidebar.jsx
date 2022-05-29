import { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext } from "../../context/authcontext/Authcontext";
import data from "../../data";
import Modal from "../modal/modal";
import User from "../user/User";
import "./Sidebar.css";
const Sidebar = () => {
  const [click, setClick] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = !search
    ? data
    : data.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-left">
          <span className="logo" onClick={() => setClick(true)}>
            <GiHamburgerMenu />
          </span>
        </div>
        <div className="sidebar-right" onClick={() => setClick(false)}>
          <div className="search">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <User data={filtered} />
        </div>
        {click ? <Modal setClick={setClick} /> : ""}
      </div>
    </div>
  );
};
export default Sidebar;
