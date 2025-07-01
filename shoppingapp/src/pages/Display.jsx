import axios from "axios";
import { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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

    const [currentPage, setCurrentPage]= useState(1);
  const recordsPerPage=3;
  const lastIndex= currentPage*recordsPerPage;
  const firstIndex= lastIndex-recordsPerPage;
  const records= mydata.slice(firstIndex, lastIndex);
  const npage= Math.ceil(mydata.length/recordsPerPage);
  const numbers=[...Array(npage+1).keys()].slice(1);

    const ans=records.map((key)=>{
        return(
            <>
    <Card id="card">
      <Card.Body>
        <Card.Title><h4>Product Name:{key.productName}</h4></Card.Title>
        <Card.Text>
                <h6>Id:{key.serialId}</h6>
                <h6>Brandname:{key.brandName}</h6>
                <h6>Price:{key.price}</h6>
                <h6>Colo:r{key.color}</h6>
                <h6>Size:{key.size}</h6>
        </Card.Text>
        <Button variant="primary" id="cartbtn" onClick={()=>{dispatch(addCart({id:key.id, productName:key.productName, brandName:key.brandName,price:key.price, color:key.color,key:key.size}))}}>Add cart</Button>
      </Card.Body>
    </Card>
            </>
        )
    })
    return(
        <>
         <div id="carddata">
            {ans}
         </div>
        </>
    )
}
export default Display;