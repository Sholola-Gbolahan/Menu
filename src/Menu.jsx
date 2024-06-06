import React from "react";
import MenuItems from "./MenuItems";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        return <MenuItems id={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};

export default Menu;
