import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 1,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

const counterActions = counterSlice.actions;
const counterReducer = counterSlice.reducer;

export { counterActions, counterReducer };