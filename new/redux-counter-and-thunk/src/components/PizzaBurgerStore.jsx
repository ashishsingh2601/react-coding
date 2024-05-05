import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementPizzaCount, decrementBurgerCount } from "../redux/actions/actions";

const PizzaBurgerStore = () => {
  const dispatch = useDispatch();
  const burger_count = useSelector((state) => state.burger.burgers);
  const pizza_count = useSelector((state) => state.pizza.pizzas);

  return (
    <main>
      <div>
        <button onClick={() => dispatch(decrementPizzaCount())}>Sell Pizza</button>
        <span>{pizza_count}</span>
      </div>

      <div>
        <button onClick={() => dispatch(decrementBurgerCount())}>Sell Burger</button>
        <span>{burger_count}</span>
      </div>
    </main>
  );
};

export default PizzaBurgerStore;
