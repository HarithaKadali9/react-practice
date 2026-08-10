import { createSlice } from "@reduxjs/toolkit";
import { addUser } from "./userSlice";

const connectionSlice=createSlice({
    name:"connection",
    initialState: [],
    reducers:{
        addConnection:(state, action)=>{
            return action.payload;
        }
    }
})

export const {addConnection} = connectionSlice.actions;
export default connectionSlice.reducer;