import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShoppingState {
    userNames: string[]; 
}

const initialState: ShoppingState = {
    userNames: []
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<string>) {
            const newUser : string = action.payload
            state.userNames.push (newUser)
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
