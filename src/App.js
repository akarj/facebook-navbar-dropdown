import Navbar from "./components/navbar/Navbar";
import NavItem from "./components/navItem/NavItem";
import { ReactComponent as BoltIcon } from "./data/svg_icon_data/bolt.svg";
import { ReactComponent as BellIcon } from "./data/svg_icon_data/bell.svg";
import { ReactComponent as ArrowIcon } from "./data/svg_icon_data/arrow.svg";
import { ReactComponent as CaretIcon } from "./data/svg_icon_data/caret.svg";
import { ReactComponent as ChevronIcon } from "./data/svg_icon_data/chevron.svg";
import { ReactComponent as CogIcon } from "./data/svg_icon_data/cog.svg";
import { ReactComponent as MessengerIcon } from "./data/svg_icon_data/messenger.svg";
import { ReactComponent as PlusIcon } from "./data/svg_icon_data/plus.svg";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />

        <NavItem icon={<CaretIcon />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </div>
  );
}

export default App;

function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="dropdown">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem
        leftIcon={<CogIcon />}
        rightIcon={<ChevronIcon />}
      ></DropdownItem>
    </div>
  );
}
