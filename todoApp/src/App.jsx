
import Table from 'react-bootstrap/Table';
import { useSelector,useDispatch } from "react-redux";
import { addTask } from "./todoSlice";
import { useState } from "react";
const App=()=>{
  const data=useSelector(state=>state.todo.task);
  const dispatch=useDispatch();
  const[txt,setTxt]=useState("");
  let sno=0;
  const ans=data.map((key)=>{
    sno++;
    return(
      <>
       <tr>
          <td>{sno}</td>
          <td>{key.work}</td>
       </tr>
      </>
    )
  })
  return(
    <>
     <h1>Todo App!!</h1>
     Enter Task: <input type="text" value={txt} onChange={(e)=>{setTxt(e.target.value)}}/><br/><br/>
     <button onClick={()=>{dispatch(addTask({work:txt}))}}>Add</button><br/><br/>
     <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Sno</th>
          <th>Task</th>
          
        </tr>
      </thead>
      <tbody>
         {ans}
      </tbody>
      </Table>
    </>
  )
}
export default App;