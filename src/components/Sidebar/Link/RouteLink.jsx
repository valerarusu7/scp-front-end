import "./RouteLink.css";

import { Link, useRouteMatch } from "react-router-dom";

import React from "react";
import { IconContext } from "react-icons/lib";

function RouteLink({ name, Icon, to, exact }) {
  const match = useRouteMatch({
    exact,
    path: to,
  });

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <div className="route__container">
        {match ? (
          <Link to={to} className="route__link--active">
            <div className="icon--active">{Icon}</div>
            <div className="title">{name}</div>
          </Link>
        ) : (
          <Link to={to} className="route__link">
            <div className="icon">{Icon}</div>
            <div className="title">{name}</div>
          </Link>
        )}
      </div>
    </IconContext.Provider>
  );
}

export default RouteLink;
