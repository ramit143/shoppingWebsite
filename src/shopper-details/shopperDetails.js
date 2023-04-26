import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export function ShopperDetails () {
    const [product,setProduct] = useState({id:0,title:'',price:0,rating:{rate:0,count:0}});
    const params = useParams()
    useEffect(() => {
        axios({
            method:'get',
            url:`http://fakestoreapi.com/products/${params.id}`
        })
        .then((response) =>{
            setProduct(response.data)
        })
    },[params.id])
    return (
        <div className="container-fluid">
        <h2>Details</h2>
        <div className="row">
        <div className="col-3">
            <img src={product.image} width="300px" height="300px" />
        </div>
        <div className="col-9">
        <dl>
            <dt>Title</dt>
            <dd>{product.title}</dd>
            <dt>Price</dt>
            <dd>{product.price}</dd>
            <dt>Description</dt>
            <dd>{product.description}</dd>
            <dt>Category</dt>
            <dd>{product.category}</dd>
            <dt>Rating</dt>
            <dd>
                <span className="bi bi-star-fill text-success"></span>
                <span className="bi bi-star-fill text-success"></span>
                <span className="bi bi-star-fill text-success"></span>
                <span className="bi bi-star-fill text-success">{product.rating.rate}</span>
                <span className="text-danger ms-2">count: {product.rating.count}</span>
            </dd>
        </dl>
        <div>
            <Link to={'/category/' + product.category} style={{textDecoration:'none',color:'purple'}}>Back to {product.category}</Link>
        </div>

        </div>
            
        </div>

        </div>
    )
}