import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Layout(props) {
  const [show, setShow] = useState(false);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    if (
      location.pathname != "/login" &&
      location.pathname != "/Registration/" &&
      location.pathname != "/userAuth" &&
      location.pathname != "/AlumniList" &&
      location.pathname != "/Events" &&
      location.pathname != "/User/profile" &&
      location.pathname != "/Events/partcipations" &&
      location.pathname != "/users" &&
      location.pathname != "/jobs" &&
      location.pathname != "/dashboard"
    )
      setShow(true);
    else setShow(false);

  }, []);
  return <>{show && props.children}</>;
}
