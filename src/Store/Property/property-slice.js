import {createSlice} from "@reduxjs/toolkit";


const propertySlice=createSlice({
    //slice name
    name:"property",
    //initial state for property slice
    initialState:{
        properties:[], //array to fetch property
        totalProperties:0,
        searchParams:{},  //parameters used to search
        error:null,  //error state
        loading:false, //loading state for property
    },
    //reducer function to handle different functions
    reducers:{
        getRequest(state){
            state.loading=true;
        },
        // action  to update property states with fatch data
        getProperties(state,action){
            state.properties=action.payload.data;
            state.totalProperties=action.payload.all_properties;
            state.loading=false;
        },
         //action to search parameter
         updateSearchParams: (state,action)=>{
            state.searchParams=Object.keys(action.payload).length ===0 ? {} :
            {
                ...state.searchParams,
                ...action.payload,
            };
         },
         //action to update error state
         getErrors(state,action){
            state.error=action.payload;
         },
    },
});
export  const propertyAction=propertySlice.actions;
export default propertySlice;