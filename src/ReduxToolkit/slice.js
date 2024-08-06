import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// creact action 
const base_url = "https://toufiq-app.onrender.com"
export const getproduct = createAsyncThunk('product/getproduct',async(_,{getstate,rejectWithValue})=>{
    const token = localStorage.getItem('token')
    try {
        const response = await axios.get( `${base_url}/api/product`,{
            headers: {
              Authorization: `Token ${token}`,}
    })
        console.log(response.data.product)
        return response.data.product
    } catch (error) {
        return rejectWithValue(error.response.data.detail || 'Failed to fetch users');
        
    }
})

export const detailsproduct = createAsyncThunk('product/details',async({ id }, { rejectWithValue })=>{
    const token = localStorage.getItem('token')
    try {
        const response = await axios.get(`${base_url}/api/product/${id}`,{
            headers: {
              Authorization: `Token ${token}`,}
    })
        console.log(response.data.singleProduct)
        return response.data.singleProduct
        
    } catch (error) {
        return rejectWithValue(error.response.data.details || 'Failed to feath users')
        
    }

})

export const addproduct = createAsyncThunk('product/addproduct',async({name,brand,price,teg},{rejectWithValue})=>{
    const token = localStorage.getItem('token')

    try {
        const response = await axios.post(`${base_url}/api/postproduct`,{
            name,brand,price,teg
        },
        {
            headers: {
              Authorization: `Bearer ${token}`
            }
        }
    )
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.details || 'Failed to feath users')
        
    }
})
export const deleteProduct = createAsyncThunk('product/deleteProduct', async (id) => {
    const token = localStorage.getItem('token')
    await axios.delete(`${base_url}/api/product/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
    });
    return id; // Return the id of the deleted product
  });
  //newsfeed 
  export const getnews = createAsyncThunk('news/getnews',async(_,{getstate,rejectWithValue})=>{
    const token = localStorage.getItem('token')
    try {
        const response = await axios.get( `${base_url}/bdnews/getnews`,{
            headers: {
              Authorization: `Token ${token}`,}
    })
        console.log(response.data)
        return response.data.data
    } catch (error) {
        return rejectWithValue(error.response.data.detail || 'Failed to fetch users');
        
    }
})

const initialState = {

    products :[],
    details:{},
    newsdata:[],
    status:'idle',
    error:null
}



const productdata = createSlice({
    name: 'product',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(getproduct.pending,(state)=>{
            state.status ='loading'
        }
        )
        .addCase(getproduct.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.products = action.payload
        })
        .addCase(getproduct.rejected,(state,action)=>{
            state.status = 'failed';
            state.error = action.error.message
        })
        .addCase(detailsproduct.pending,(state)=>{
            state.status = 'loading'
            
        })
        .addCase(detailsproduct.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.details = action.payload
        })
        .addCase(detailsproduct.rejected,(state,action)=>{
            state.status = 'failed';
            state.error = action.error.message
        })
        .addCase(addproduct.pending,(state)=>{
            state.status = 'loading'
            
        })
        .addCase(addproduct.fulfilled,(state)=>{
            state.status = 'succeeded';
            state.error = null
            
        })
        .addCase(addproduct.rejected,(state,action)=>{
            state.status = 'failed';
            state.error = action.error.message
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            state.products = state.products.filter((product) => product._id !== action.payload);
        })
        .addCase(getnews.pending,(state)=>{
            state.status = 'loading';
            state.error = null
            
        })
        .addCase(getnews.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.newsdata = action.payload
        })
       .addCase(getnews.rejected,(state,action)=>{
        state.status = 'failed';
        state.error = action.error.message

       })

    }
})


export default productdata.reducer







