import React from "react";
import "./LeftSidebar.css";
import { SidebarData } from "./SidebarData";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";

function Sidebar({ isOpen, toggleSidebar, username }) {
    return (
        <div className={`Sidebar ${isOpen ? "open" : ""}`}>
            <div className="SidebarNotch" onClick={toggleSidebar}></div>
            {isOpen && (
                <>
                    <SidebarHeader username={username} />
                    <ul className="SidebarList">
                        {SidebarData.map((val, key) => {
                            return (
                                <li
                                    key={key}
                                    className="row"
                                    id={
                                        window.location.pathname === val.link
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() => {
                                        window.location.pathname = val.link;
                                    }}
                                >
                                    <div className="icon">{val.icon}</div>
                                    <div className="title">{val.title}</div>
                                </li>
                            );
                        })}
                    </ul>
                    <SidebarFooter />
                </>
            )}
        </div>
    );
}

export default Sidebar;
