import Navbar from "./components/navbar/Navbar";
import NavItem from "./components/navItem/NavItem";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon="😃" />
        <NavItem icon="😃" />
        <NavItem icon="😃" />
      </Navbar>
    </div>
  );
}

export default App;
