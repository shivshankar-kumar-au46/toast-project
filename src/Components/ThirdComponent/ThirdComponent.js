import axios from 'axios'
import React, { useEffect, useState } from 'react'
import classes from "./ThirdComponent.module.css"
// import Button from '../UI/Button'


const ThirdComponent = () => {
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    const getData=async({page,limit})=>{
      try {
        const res=await axios.get("https://fakestoreapi.com/products",{
            params:{
                _page:page,
                _limit:limit
            }
        });
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
        getData({page,limit:5})
    },[page])
  return (
    <>
    {/* <Button /> */}
    <div className={classes.parent}>
        {
            data.map((item)=>{
                return <div key={item.id} className={classes.child}>
                    <img src={item.image} alt={item.image} width={"130px"}/>
                    <p>{item.category}</p>
                    <p>{item.decription}</p>
                    <p>Price {item.price}</p>
                </div>
            })
        }
    </div>
    <div className={classes.buttonDiv}>
        <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
        <button disabled={page===1}>{page}</button>
        <button onClick={()=>setPage(page+1)}>Next</button>
    </div>
    </>
  )
}

export default ThirdComponent