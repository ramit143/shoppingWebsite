import { useState, useEffect } from "react";
import axios from "axios";

export function ShopperJewelery () {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        axios({
            method:'get',
            url:'http://fakestoreapi.com/products/category/jewelery'
        })
        .then(response => {
            setProducts(response.data);
            console.log(response.data)
        })
    },[])
    return (
        <div className="container-fluid">
        <h2 style={{color:'yellowGreen'}}>Jewelery</h2>
         <div className="d-flex flex-wrap justify-content-between">
              {
                products.map(product => 
                 
                   <div className="card m-2 p-1" style={{width:'250px'}} >
                       <img src={product.image} className="card-img-top m-4" height="150" />
                       <div className="card-header" style={{height:'150px'}}>
                            <p>{product.title}</p>
                       </div>
                   </div>
                 
                 )
              }
         </div>

        </div>
    )
}