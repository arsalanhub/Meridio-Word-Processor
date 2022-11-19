import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

export default function NavigateDocument() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname == "/") navigate(`/documents/${uuidV4()}`);
  }, []);
  return <div>NavigateDocument</div>;
}
