import React from "react";
import { menuItemsData } from "../menuItemsData";

import MenuItems from "./MenuItems";

const Navbar = () => {
  const depthLevel = 0;
  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthlevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
