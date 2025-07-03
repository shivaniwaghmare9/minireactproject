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
        <h2><span style={{color:"darkred"}}>FL</span>IP  <span style={{color:"darkred"}}>CO</span>IN</h2>
        <div className="coin">
        <h4>{coin}</h4>
        </div>
        <div className="count">
        <h4 id="btn1">TotalCount:{count}</h4>
        <h4 id="btn2">HeadsCount:{headscount}</h4>
        <h4 id="btn3">TailsCount:{tailscount}</h4>
        </div>
        <button onClick={()=>{dispatch(flipcount())}} className="btn">FlipCoin</button>
        </div>
         
        </>
    )
}
export default App;