import React from 'react';
import { NavLink } from 'react-router-dom';

export const MainNavigation = () => (
  <div>
    <nav className="border-bottom d-flex justify-content-around align-items-center py-2 h2">
    <NavLink
      className="text-decoration-none"
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      className="text-decoration-none"
      to="/people"
    >
      People
    </NavLink>
  </nav>
  </div>
)