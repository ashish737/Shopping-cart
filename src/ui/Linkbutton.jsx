import { Link, useNavigate } from 'react-router-dom';

function Linkbutton({ children, to }) {
  const navigate = useNavigate();
  const className =
    ' text-sm text-red-400 underline underline-offset-1 hover:text-blue-400';
  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default Linkbutton;
