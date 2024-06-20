import { counterActions } from "../slices/counterSlice";
import { AppDispatch } from "../..";

const increase = () => (dispatch: AppDispatch) => {
    dispatch(counterActions.increment());
};

const decrease = (value: number) => (dispatch: AppDispatch) => {
    if (value > 1)
        dispatch(counterActions.decrement());
};

export { increase, decrease };

