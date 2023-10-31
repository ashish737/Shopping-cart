import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreseItemQuantity, increaseItemQuantity } from './cartSlice';
function UpdateItemQuantityItem({ pizzaId, CurrentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-3 md:gap-1">
      <Button
        type="round"
        onClick={() => dispatch(decreseItemQuantity(pizzaId))}
      >
        -
      </Button>

      <span>{CurrentQuantity}</span>

      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantityItem;
