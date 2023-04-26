import { useEffect,useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export function CrudDetails () {
    const [product,setProduct] = useState([{ProductId:0,Name:'',Price:0,Stock:false}]);
    const params = useParams();
    useEffect(() =>{
        axios({
            method:"get",
            url:`http://127.0.0.1:8080/details/${params.id}`
        }).then((res) =>{
            setProduct(res.data)
            
        })
    },[params.id])
    return (
        <div className="container-fluid">
           <h2>Product Details</h2>
           <dl>
              <dt>ProductId</dt>
              <dd>{product[0].ProductId}</dd>
              <dt>Name</dt>
              <dd>{product[0].Name}</dd>
              <dt>Price</dt>
              <dd>{product[0].Price}</dd>
              <dt>Stock</dt>
              <dd>{(product[0].Stock==true)?"Available":"Out of Stock"}</dd>
           </dl>
          <Link to="/products" style={{color:'purple'}} className="btn"><h6>Back To Products</h6></Link>
        </div>
    )
}  