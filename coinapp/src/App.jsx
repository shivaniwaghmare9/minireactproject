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
    const {coin,count,headscount,tailscount}=useSelector(state=>state.mycoin)
    const dispatch=useDispatch();
    return(
        <>
        <div id="counter">
        <h3>Flip Coin</h3>
        <h4>{coin}</h4>
        <div className="count">
        <h4>TotalCount:{count}</h4>
        <h4>HeadsCount:{headscount}</h4>
        <h4>TailsCount:{tailscount}</h4>
        </div>
        <button onClick={()=>{dispatch(flipcount())}}>Flip</button>
        </div>
         
        </>
    )
}
export default App;