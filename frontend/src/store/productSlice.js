import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    items: [],
    status: null,
    createStatus: null,
};



// function that fetch product from the backend
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API}/products`)
            if (response) return response.data;
        } catch (error) {
            console.log(error);
        }
    })


export const productsCreate = createAsyncThunk(
    "products/productsCreate",
    async (values) => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API}/products`,
                values,
            );
            if (response) return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);



const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {


        builder.addCase(fetchProducts.pending, (state, action) => {
            return { ...state, status: 'pending' }
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = 'success'
            return state

        })

        builder.addCase(fetchProducts.rejected, (state, action) => {
            return { ...state, status: 'rejected' }
        })


        builder.addCase(productsCreate.pending, (state, action) => {
            return { ...state, status: 'pending' }
        })
        builder.addCase(productsCreate.fulfilled, (state, action) => {

            state.items.push(action.payload)
            state.status = 'success'
            return state

        })
        builder.addCase(productsCreate.rejected, (state, action) => {
            return { ...state, status: 'rejected' }
        })

    }
})
export default productsSlice.reducer
