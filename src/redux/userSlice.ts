import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
}


//define the intial states here now 

const initialState = {
    user: {
        name: null,
        email: null
    },
    token: null,
    loggedIn: false
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
    }
})

//export the actions 
export const { login, logout, register } = userSlice.actions
//create a custom hook to access the user 
export const selectUser = (state: any) => state.user
export const checkAuth = (state: any) => state.user.loggedIn
//export the reducer
export default userSlice.reducer