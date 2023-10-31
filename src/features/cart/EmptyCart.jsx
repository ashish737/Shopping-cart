import Linkbutton from '../../ui/Linkbutton';

function EmptyCart() {
  return (
    <div>
      <Linkbutton to="/menu">&larr;Back to Menu</Linkbutton>

      <p className="mt-5 rounded bg-yellow-300 text-center text-xl font-bold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
