import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from 'jwt-decode'

const initialState = {
    token: localStorage.getItem("token"),
    name: "",
    email: "",
    _id: "",
    registerStatus: "",
    registerError: "",
    loginStatus: "",
    loginError: "",
    userLoaded: false,
    sendStatus: ""
};


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

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (values) => {
        try {
            const token = await axios.post(`${process.env.REACT_APP_API}/api/user/login`, {
                email: values.email.toLowerCase(),
                password: values.password,
            })
            localStorage.setItem("token", token.data)
            if (token) return token.data
        } catch (error) {
            throw new Error(error.response.data);
        }
    }
)

export const contact = createAsyncThunk(
    "auth/contact",
    async (values) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/api/user/contact`, {
                name: values.name,
                email: values.email,
                phone: values.phone,
                message: values.message
            })
            if (response) return response.data
        } catch (error) {
            throw new Error(error.response.data);
        }
    }
)



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loadUser(state, action) {
            const token = state.token
            if (token) {
                const user = jwtDecode(token)
                return {
                    ...state,
                    token,
                    name: user.name,
                    email: user.email,
                    _id: user._id,
                    userLoaded: true
                }
            }
        },

        logout(state, action) {
            localStorage.removeItem("token")
            return {
                ...state,
                token: "",
                name: "",
                email: "",
                _id: "",
                registerStatus: "",
                registerError: "",
                loginStatus: "",
                loginError: "",
                userLoaded: false,
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            return { ...state, registerStatus: 'pending' }
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            if (action.payload) {

                const user = jwtDecode(action.payload)

                return {
                    ...state,
                    token: action.payload,
                    name: user.name,
                    email: user.email,
                    _id: user._id,
                    registerStatus: 'success'
                }
            } else {
                return state
            }
        })
        builder.addCase(registerUser.rejected, (state, action) => {

            return {
                ...state, registerStatus: 'rejected', registerError: action.error
            }
        })
        builder.addCase(loginUser.pending, (state, action) => {
            return { ...state, loginStatus: 'pending' }
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload) {

                const user = jwtDecode(action.payload)

                return {
                    ...state,
                    token: action.payload,
                    name: user.name,
                    email: user.email,
                    _id: user._id,
                    loginStatus: 'success',
                    isAdmin: user.isAdmin
                }
            } else {
                return state
            }
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            return {
                ...state, loginStatus: "rejected",
                loginError: action.error,
            }
        })
        builder.addCase(contact.pending, (state, action) => {
            return { ...state, sendStatus: 'pending' }
        })
        builder.addCase(contact.fulfilled, (state, action) => {
            return { ...state, sendStatus: 'success' }
        })
    },
})

export const { loadUser, logout, } = authSlice.actions
export default authSlice.reducer