import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const ToolsLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect /dashboard/tools to /dashboard/tools/agent
  useEffect(() => {
    if (location.pathname === "/dashboard/tools") {
      navigate("/dashboard/tools/agent", { replace: true });
    }
  }, [location.pathname, navigate]);

  return <Outlet />;
};

export default ToolsLayout;

