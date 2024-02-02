import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementValue, setIncrementValue] = useState(0);

  const amount = Number(incrementValue) || 0;

  const resetAll = () => {
    setIncrementValue(0);
    dispatch(reset());
  };

  return (
    <section>
      <h1>{count}</h1>
      <div>
        <button type="button" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button type="button" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <input
        type="text"
        value={incrementValue}
        onChange={(e) => setIncrementValue(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Increment By Amount
        </button>
        <button onClick={() => dispatch(resetAll)}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
