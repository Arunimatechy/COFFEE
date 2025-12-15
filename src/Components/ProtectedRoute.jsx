

import { useContext } from "react";
import { UserContext } from "../Context/UserContext.jsx";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  return user ? children : <Navigate to="/login" replace />;
};

export const AdminRoute = ({children}) => {
  const {user} = useContext(UserContext)
  return user.isAdmin ? children : <Navigate to={'/'} replace  />
}

export default ProtectedRoute;
