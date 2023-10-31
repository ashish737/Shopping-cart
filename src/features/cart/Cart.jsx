import Linkbutton from '../../ui/Linkbutton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mt-4 p-4">
      <Linkbutton to="/menu">&larr;Back to Menu</Linkbutton>

      <h2 className="mt-4 text-xl font-bold">Your cart</h2>

      <ul className="mt-4 divide-y divide-stone-300 ">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-5 space-x-3 ">
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
