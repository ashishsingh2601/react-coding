import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {decrement, decrementByAmount, increment, incrementByAmount} from "../redux/actions/actions"
import PizzaBurgerStore from './PizzaBurgerStore'
import FetchUsers from './FetchUsers'

const Counter = () => {

    const dispatch = useDispatch();
    const count = useSelector((state) =>  state.counter.count);


    console.log(count);
  return (
    <main>
      <div>Counter</div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(decrementByAmount(5))}>Decrement by 5</button>
      </div>
      <div>{count}</div>
      <PizzaBurgerStore />
      <FetchUsers />
    </main>
  )
}

export default Counter