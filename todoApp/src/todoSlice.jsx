
import { createSlice } from "@reduxjs/toolkit";
const todoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            console.log(actions)
            state.task.push(actions.payload)
        },
        // taskDelete:(state,actions)=>{
        //     console.log(actions.payload)
        //     state.task=state.task.filter(items=>items.id!=actions.payload.id)
        // }
        taskDelete:(state,actions)=>{
            console.log(actions.payload.id)
            state.task=state.task.filter(function(key){
               if(key.id==actions.payload.id)
               {
                return false;
               }
               else{
                return true;
               }
            })
        }
    }
})
export const {addTask,taskDelete}=todoSlice.actions;
export default todoSlice.reducer;