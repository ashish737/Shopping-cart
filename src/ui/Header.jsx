import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className=" flex items-center justify-between border-2  border-gray-950 bg-gray-500 px-3 py-3 text-xl font-bold uppercase">
      <Link to="/" className=" tracking-widest">
        Shop Pizza 🤤
      </Link>
    </header>
  );
}

export default Header;
