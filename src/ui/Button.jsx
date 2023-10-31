import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'trackig-width text-xs transition-colours p-4  focus:ring-offset-3 rounded-full bg-yellow-300 text-l font-bold uppercase text-red-400 duration-100 hover:text-blue-400 focus:outline-none focus:ring-blue-400 disabled:cursor-not-allowed';
  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-4 md:py-2 text-black text-xs',
    secondary:
      ' focus:ring-offset-3 text-xs font-semibold uppercase focus:outline-none focus:ring-black trackig-width hover:text-red-600 transition-colours bg-stone-300 rounded-full ',
    round:
      '  bg-gray-300 rounded-full text-extrabold px-4 py-2 focus focus:ring-2  md:px-3 text-xs md:py-2 text-black text-xs ',
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
