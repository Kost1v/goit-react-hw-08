import css from "../navigation/Navigation.module.css";

import clsx from "clsx";

import { NavLink } from "react-router-dom";

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const AuthNav = () => {
  return (
    <>
      <NavLink to="/login" className={buildCssClasses}>
        Log in
      </NavLink>
      <NavLink to="/register" className={buildCssClasses}>
        Register
      </NavLink>
    </>
  );
};

export default AuthNav;