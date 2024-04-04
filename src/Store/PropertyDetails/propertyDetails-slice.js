import { createSlice } from "@reduxjs/toolkit";

export const propertyDetailsSlice=createSlice({
    name:"propertyDetails",
    initialState:{
        propertydetails:[],
        loading:false,
        error:null,
    },
    reducers:{
        getListRequest(state){
            StyleSheet.loading=true;
        },
        //update properrty details in state  after successfully fetching them
        getPropertyDetails(state,action){
            state.propertydetails=action.payload;
            state.loading=false;
        },
        getError(state,action){
            state.error=action.payload;
            state.loading=false;
        }
    },
});
export const propertyDetailsAction=propertyDetailsSlice.actions;
export default propertyDetailsSlice;