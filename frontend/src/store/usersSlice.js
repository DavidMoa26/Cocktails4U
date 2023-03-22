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

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (values) => {
        try {
            const token = await axios.post(`${process.env.REACT_APP_API}/api/user/register`, {
                name: values.name,
                email: values.email.toLowerCase(),
                password: values.password,
            })
            localStorage.setItem("token", token.data);
            return token.data;

        } catch (error) {
            throw new Error(error.response.data)
        }
    }
)

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