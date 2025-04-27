import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findUser } from "../type";
// Define a type for the slice state
export interface CounterState {
    user: findUser;
}

const initialState: CounterState = {
    user: {
        success: false,
        user: {
            createdAt: "", 
            email: "",
            name: "",
            updatedAt: "",
            _id: "",
            role: ''
        },
        msg: ''
    }
}
export const authUser = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<findUser>) => {
            state.user = action.payload
        }
    }
})

export const { addUser } = authUser.actions;
export default authUser.reducer;