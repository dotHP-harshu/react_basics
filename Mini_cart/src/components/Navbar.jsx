import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="flex gap-6 p-10">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "bg-red-500 , text-white" : "text-white"
        }
        end
      >
        Home
      </NavLink>
      <NavLink
        to={"/cart"}
        className={({ isActive }) =>
          isActive ? "bg-red-500 , text-white" : "text-white"
        }
        end
      >
        cart
      </NavLink>
    </nav>
  );
}

export default Navbar;
