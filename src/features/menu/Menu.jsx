import { useLoaderData } from 'react-router';
import { getMenu } from '../../services/apiMenu';
import MenuItem from './MenuItem';
function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="mb-2 divide-y divide-gray-300 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
