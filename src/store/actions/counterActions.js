import { counterActions } from "../slices/counterSlice";

const increase = () => (dispatch) => {
    dispatch(counterActions.increment());
};

const decrease = (value) => (dispatch) => {
    if (value > 1) {
        dispatch(counterActions.decrement());
    }
};

export { increase, decrease };