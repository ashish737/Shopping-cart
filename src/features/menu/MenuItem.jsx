import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantityItem from '../cart/UpdateItemQuantityItem';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const CurrentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = CurrentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="  flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-50 grayscale' : ''}`}
      />
      <div className="flex grow flex-col">
        <p className="text-medium font-semibold">{name}</p>
        <p className="text-sm capitalize italic ">{ingredients.join(', ')}</p>
        <div className="item-center mt-auto flex justify-between">
          {!soldOut ? (
            <>
              <p className="text-sm">{formatCurrency(unitPrice)}</p>
              {!isInCart && (
                <Button type="small" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              )}
              {isInCart && (
                <div className="flex items-center gap-3 sm:gap-5">
                  <UpdateItemQuantityItem
                    pizzaId={id}
                    CurrentQuantity={CurrentQuantity}
                  />
                  <DeleteItem pizzaId={id} />{' '}
                </div>
              )}
            </>
          ) : (
            <p className=" text-sm uppercase text-red-600">Sold out</p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
