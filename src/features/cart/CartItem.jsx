import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantityItem from './UpdateItemQuantityItem';
import { getCurrentQuantityById } from './cartSlice';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const CurrentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-2 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>

      <div className="flex  justify-between sm:gap-6">
        <p className="mt-3 text-xs font-semibold">
          {formatCurrency(totalPrice)}
        </p>
        <UpdateItemQuantityItem
          pizzaId={pizzaId}
          CurrentQuantity={CurrentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
