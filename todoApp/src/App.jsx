
import Table from 'react-bootstrap/Table';
import { useSelector,useDispatch } from "react-redux";
import { addTask,taskDelete,taskReindex,taskComplete,taskInComplete,taskEdit } from "./todoSlice";
import { useState } from "react";
const App=()=>{
  const data=useSelector(state=>state.todo.task);
  const dispatch=useDispatch();
  const[txt,setTxt]=useState("");
  const[btn,setBtn]=useState(true);
  const[myid,setMyid]=useState("");
  const dataEdit=(id,work)=>{
       setTxt(work);
       setBtn(false);
       setMyid(id)
  }
  const MyeditData=()=>{
    dispatch(taskEdit({id:myid,work:txt}))
    setBtn(true)
  }
  let sno=0;
  const ans=data.map((key,index)=>{
    sno++;
    return(
      <>
       <tr>
          <td>{sno}</td>
          <td>{key.taskStatus ?(
            <>
            <span style={{color:"red",textDecoration:"line-through"}}>
              {key.work}
            </span>
            </>
          ):(
            <>
            {key.work}
            </>
          )}
        </td>
          <td>
            <span onClick={()=>{dispatch(taskDelete({id:key.id}))}} style={{cursor:"pointer"}}>delete</span>
          </td>
          <td>
            <span onClick={()=>{dispatch(taskReindex({id:index}))}} style={{cursor:"pointer"}}>Remove</span>
          </td>
          <td>
            <span onClick={()=>{dispatch(taskComplete({id:key.id}))}} style={{cursor:"pointer"}}>complete</span>
          </td>
          <td>
            <span onClick={()=>{dispatch(taskInComplete({id:key.id}))}} style={{cursor:"pointer"}}>incomplete</span>
          </td>
          <td>
            <span onClick={()=>{dispatch(dataEdit(key.id,key.work))}} style={{cursor:"pointer"}}>edit</span>
          </td>
       </tr>
      </>
    )
  })
  return(
    <>
    <div className="box">
     <h3 className='head'>Todo App!!</h3>
     Enter Task: <input type="text" value={txt} onChange={(e)=>{setTxt(e.target.value)}} id="inp"/><br/><br/>
     { btn ?(
        <>
        <button onClick={()=>{dispatch(addTask({id:Date.now(),work:txt,taskStatus:false}))}} className="btn">Add</button><br/><br/>
        </>
        ):(
          <>
          <button onClick={MyeditData}>Editsave</button>
          </>
        )

     }
    </div>
     <Table striped bordered hover size="sm"variant="dark">
      <thead>
        <tr>
          <th>Sno</th>
          <th>Task</th>
          <th>Delete</th>
          <th>Remove</th>
          <th>Complete</th>
          <th>Incomplete</th>
          <th>Edit</th>
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