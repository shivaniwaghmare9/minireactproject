
import { useSelector,useDispatch } from "react-redux";
import { addTask } from "./todoSlice";
import { useState } from "react";
const App=()=>{
  const data=useSelector(state=>state.todo.task);
  const dispatch=useDispatch();
  const[txt,setTxt]=useState("");
  const ans=data.map((key)=>{
    return(
      <>
       <tr>
        
       </tr>
      </>
    )
  })
  return(
    <>
     <h1>Todo App!!</h1>
     Enter Task: <input type="text" value={txt} onChange={(e)=>{setTxt(e.target.value)}}/><br/><br/>
     <button onClick={()=>{dispatch(addTask({work:txt}))}}>Add</button>
    </>
  )
}
export default App;