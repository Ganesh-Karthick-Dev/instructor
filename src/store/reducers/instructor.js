/* eslint-disable no-unused-vars */

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    instructor : null
}


const userSlice = createSlice({
    name : 'userSlice',
    initialState,
    reducers : {
        addInstructor : (state,action)=> {
            state.instructor = action.payload
        } ,
        removeInstructor : (state,action)=> {
            state.initialState = null
        }
    }
})


export const {addInstructor,removeInstructor} = userSlice.actions;
export default userSlice.reducer ;
