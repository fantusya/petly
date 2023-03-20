import { Link } from 'react-router-dom';

const RouteFormLoginRegister = ({ link, question, pageName }) => {
  return (
    <p>
      <span>{question}</span>
      <Link to={link}>{pageName}</Link>
    </p>
  );
};
export default RouteFormLoginRegister;
