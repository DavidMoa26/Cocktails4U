import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    users: [],
    status: null

};

export const fetchUsers = createAsyncThunk(
    "users/users",
    async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API}/api/user`)
            return response.data
        } catch (error) {
            console.log(error);
        }
    })


const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchUsers.pending, (state, action) => {
            return { ...state, status: 'pending' }
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
            state.status = 'success'
            return state

        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            return { ...state, status: 'rejected' }
        })


    }
})

export default usersSlice.reducer