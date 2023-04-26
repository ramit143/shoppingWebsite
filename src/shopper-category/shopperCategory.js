import { useParams,Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {useCookies} from "react-cookie";

//....we are managing tamplate using Route parameters(params)....//
export function ShopperCategory () {
    const params = useParams();
    const [products, setProducts] = useState([]);
    const [cookies,setCookie,removeCookie] = useCookies();
    const navigate = useNavigate();
    useEffect(() =>{
        if (cookies["userid"]==undefined) {
          navigate("/login")
        }
        axios({
            method:'get',
            url:`http://fakestoreapi.com/products/category/${params.catname}`
        })
        .then(response => {
            setProducts(response.data);
            console.log(response.data)
        })
    },[params.catname])
    return (
        <div className="container-fluid">
        <h2 style={{color:'yellowGreen'}} className="text-italic">Shopper Category {params.catname}</h2>
        <div className="d-flex flex-wrap justify-content-between">
              {
                products.map(product => 
                 
                   <div className="card m-2 p-1" style={{width:'250px'}}>
                       <img src={product.image} className="card-img-top m-4" height="150" />
                       <div className="card-header" style={{height:'150px'}}>
                            <p>{product.title}</p>
                       </div>
                       <div className="mt-1">
                          <Link to={'/details/' + product.id} className="btn btn-primary w-100" >Details</Link>
                       </div>
                   </div>
                 
                 )
              }
         </div>
        </div>
    )
}