import React ,{useEffect,useState}from 'react'
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import Newcollections from '../Components/NewCollection/NewCollection';
import './CSS/Stext.css';

const Shop =()=>{

    const[popular,setPopular]=useState([]);
    const[newcollection,setNewCollection]=useState([]);

    const fetchInfo = ()=>{
        fetch('http://localhost:4000/popularinwomen')
        .then((res)=>res.json())
        .then((data)=>setPopular(data))
        fetch('http://localhost:4000/newcollections')
        .then((res)=>res.json())
        .then((data)=>setNewCollection(data))
    }

    useEffect(()=>{
        fetchInfo();
    },[])
    return (
        <div>
        <div className='stext'>
         <marquee behavior="scroll" direction="left" >
                <b>Limited offer: Summer sale is live now!. Get 10% off on every dress.Shop exclusively on STYLE LAB! Happy Shopping</b></marquee>
         </div>
        <Hero/>
        <Popular data={popular}/>
        <Offers/>
        <Newcollections data={newcollection}/>
        
        
        </div>
    )
}

export default Shop;