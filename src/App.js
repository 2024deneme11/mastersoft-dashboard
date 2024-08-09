import React, { useState, useEffect } from "react";
import GraphData from './components/Main/GraphData.js'
import RightSidebar from "./components/RightSidebar/RightSidebar.js";
import { RightSidebarData } from "./components/RightSidebar/rSidebarDummy.js";
import './App.css';
import 'devextreme/dist/css/dx.light.css';
import Sidebar from "./components/LeftSidebar/Sidebar";
import Login from "./components/Login/Login.js";
import Search from "./components/Main/Search.js";
import Graph from "./components/Main/Graph.js";
import Chart from "./components/Main/Chart.js";
import "./components/Main/Middle.css"


const App = () => {
  const [open, setOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [username, setUsername] = useState("");

  const [search,setSearch]=useState("")
  const [showAll,setShowAll]=useState(true)
  const [selectedLogData, setSelectedLogData] = useState(null);

  
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleLogin = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
};

const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
};

const handleSearch = (e) =>{
  setSearch(e.target.value)
  setShowAll(e.target.value === "") 
}

if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
}

const logsToShow = showAll 
  ? GraphData
  : GraphData.filter(item=>item.AnomaliName.includes(search))

  return (
    <div className="App">
      <button onClick={toggleSidebar} className="SidebarToggle">
        {isSidebarOpen ? "" : ""}
      </button>
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        username={username}
      />
      <div className="middle">
        <Search makeSearch={handleSearch}/>
        <Graph logData={logsToShow} onRowClick={setSelectedLogData}/>
        <Chart singleLogData={selectedLogData}/>
      </div>
      <RightSidebar
        RightSidebarData={RightSidebarData}
        handleOpen={handleOpen}
        open={open}
      />
    </div>
    
  );
};


export default App;
