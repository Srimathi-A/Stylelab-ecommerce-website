import React ,{useState,useEffect} from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'
const ListProduct = () => {

    const [allproducts,setAllProducts]=useState([]);

    const fetchInfo=async ()=>{
        await fetch('http://localhost:4000/allproducts')
        .then((res)=>res.json())
        .then((data)=>{setAllProducts(data)});
    }

    useEffect(()=>{
        fetchInfo();
    },[])

    const  remove_product = async (id)=>{
        await fetch('http://localhost:4000/removeproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo
    }
    return (
        <div className='list-product'>
        <h1>All Products List</h1>
        <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>category</p>
        <p>Remove</p>
      </div>
        <div className="listproduct-allproducts">
            <hr/>
            {allproducts.map((product,index)=>{
                return (
                    <React.Fragment key={product.id}>
                <div className="listproduct-format-main listproduct-format">
                    <img src={product.image} alt=""  className="listproduct-product-icon"/>
                    <p>{product.name}</p>
                    <p>Rs.{product.old_price}</p>
                     <p>Rs.{product.new_price}</p>
                     <p>{product.category}</p>
                     <img onClick={()=>{remove_product(product.id)}}className='listproduct-remove-icon' src={cross_icon} alt=""/>
                </div>
                <hr/>
                </React.Fragment>
                );
            })}

        </div>
        </div>
    )
}

export default ListProduct