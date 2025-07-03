

import { useState } from "react";

const Flip=()=>{
    const[coin,setCoin]=useState("Heads")
    const[flipcount,setFlipcount]=useState(0)
    const[heads,setHeads]=useState(0)
    const[tails,setTails]=useState(0)

    const flipcoin=()=>{
           const flip=Math.random() < 0.5 ? "Heads" : "Tails";
           setCoin(flip);
           setFlipcount(flipcount+1);
           if(flip === "Heads")
           {
               setHeads(heads+1)
           }
           else
           {
               setTails(tails+1)
           }
    }
    return(
    <>
        <h3>flip coin</h3>
        <h4>{coin}</h4>
        <p>Flipcount:{flipcount}</p>
        <p>Heads:{heads}</p>
        <p>Tails:{tails}</p><br/>
        <button onClick={flipcoin}>Click</button>
    </>
    )
}
export default Flip;