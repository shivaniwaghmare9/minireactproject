// import Flip from "./Flipcoin";
// const App=()=>{
//     return(
//     <>
//     <h3>Flip Coin</h3>
//     <Flip/>
//     </>
//     )
// }
// export default App;

import { flipcount } from "./coinSlice";
import { useSelector,useDispatch } from "react-redux";
const App=()=>{
    const {coin,count,headcount,tailcount}=useSelector(state=>state.mycoin)
    const dispatch=useDispatch();
    return(
        <>
        <div>
        <h3>Flip Coin</h3>
        <h4>{coin}</h4>
        <h4>TotalCount:{count}</h4>
        <h4>HeadsCount:{headcount}</h4>
        <h4>TailsCount:{tailcount}</h4>
        <button onClick={()=>{dispatch(flipcount())}}>Flip</button>
        </div>
         
        </>
    )
}
export default App;