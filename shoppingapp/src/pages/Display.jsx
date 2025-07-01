import axios from "axios";
import { useEffect, useState } from "react";

const Display=()=>{
    const[mydata,setMydata]=useState([]);
    const loadData=async()=>{
        let api="https://mocki.io/v1/10512a17-105f-435d-a920-dce1478345bd"
        const response=await axios.get(api)
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(()=>{
        loadData()
    },[])
    return(
        <>
         <h3>display</h3>
        </>
    )
}
export default Display;