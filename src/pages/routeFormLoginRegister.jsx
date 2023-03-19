import { Link, useLocation } from 'react-router-dom';

const RouteFormLoginRegister = () => {
  const location = useLocation();

  if (location === '/Login')
    return (
      <p>
        <span>Don't have an account?</span>
        <Link to="/register">Register</Link>
      </p>
    );
  return (
    <p>
      <span>Don't have an account?</span>
      <Link to="/login">Login</Link>
    </p>
  );
};
export default RouteFormLoginRegister;
