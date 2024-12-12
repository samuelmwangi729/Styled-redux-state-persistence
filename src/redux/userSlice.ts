import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * define the annotations of the initial state
 */


interface userObject {
    [key: string]: string | null
}
export interface InitialStateInterface {
    user: userObject;
    token: string | null;
    loggedIn: boolean;
    loading: boolean
}


//define the intial states here now 
//create a function that uses async thunk here 

export const loginUser = createAsyncThunk("user/login", async (userData: { username: string, password: string }) => {
    console.log("action from this function here")
    //console log the posted data
    //post the data to the backend using either fetch or 
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    return res.data
})

const initialState = {
    user: {
        name: null,
        email: null
    },
    token: null,
    loggedIn: false,
    loading: false
}
/**
 * create the user slice here 
 */

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<any>) => {
            console.log(action.payload.user.name)
            state.user.name = action.payload.user.name
            state.user.email = action.payload.user.email
            state.token = action.payload.token
            state.loggedIn = true
        },
        logout: (state) => {
            /***
             * set back everything to null
             */
            state.user.name = null
            state.user.email = null
            state.token = null
            state.loggedIn = false
        },
        register: (state, action: PayloadAction<any>) => {
            console.log("registering the user")
        }
    },
    //the extra reducers are functions that take in the inbuild builder parameter
    extraReducers: (builder) => {
        //since the login user is a function and returns a promise, we look at the three promise states here
        builder.addCase(loginUser.pending, (state) => {
            console.log("pending...")
            //update the state
            state.loading = true
        })
        //if its fulfiled, then update the state here 
        builder.addCase(loginUser.fulfilled, (state, action) => {
            //update the state here
            state.loading = false
            state.loggedIn = true
            console.log(action.payload)
        })
        builder.addCase(loginUser.rejected, (state) => {
            state.loading = false
        })
    }
})

//export the actions 
export const { login, logout, register } = userSlice.actions
//create a custom hook to access the user 
export const selectUser = (state: any) => state.user
export const checkAuth = (state: any) => state.user.loggedIn
//export the reducer
export default userSlice.reducer