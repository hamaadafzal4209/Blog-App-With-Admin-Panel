import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function OnlyAdminPrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div>
      {currentUser && currentUser.isAdmin ? (
        <Outlet />
      ) : (
        <Navigate to="/sign-in" />
      )}
    </div>
  );
}

export default OnlyAdminPrivateRoute;
