import { createSlice } from "@reduxjs/toolkit";


const auth = createSlice({
    name:":auth",
    initialState:{
        loading:false,
        error:false,
        user:null
    },
    reducers:{
        isLoading:(state) => {
            state.error = false;
            state.loading = true;
        },
        isFailing:(state) => {
            state.error = true;
            state.loading = false;
        },
        isSuccess:(state) => {
            state.error = false;
            state.loading = false;
        },
        isLogin:(state,action) => {
            state.error = false;
            state.loading = false;
            state.user = action.payload;
        },
        isLogout:(state) => {
            state.error = false;
            state.loading = false;
            state.user = null
        }
    }
});

export const {isFailing,isLoading,isLogin,isLogout,isSuccess} = auth.actions;
export default auth.reducer;