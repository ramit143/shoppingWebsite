import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export function CrudIndex () {
    const navigate = useNavigate();
    const params = useParams();
    const [products,setProducts] = useState([]);
    useEffect(() =>{
        axios({
            method:"get",
            url:"http://127.0.0.1:8080/products"
        }).then(res =>{
            setProducts(res.data);
            console.log(res.data);
        })
    },[]);
    
    function DeleteClick (e) {
        
        var flag = window.confirm("Are you sure/want to delete?");
        if (flag==true) {
          axios({
           method:'delete',
           url:`http://127.0.0.1:8080/deleteproduct/${parseInt(e.currentTarget.value)}`
          })
          
            alert("Record Deleted");
            navigate("/home");
        
          
          }
    }
    return (
        <div className="container-fluid">
           <h2>Products Grid</h2>
           <Link to="/NewProduct" className="btn btn-primary">Add New Product</Link>
           <table className="table table-hover">
               <thead>
                   <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>View</th>
                      <th>Update</th>
                      <th>Delete</th>
                   </tr>
               </thead>
               <tbody>
                  {
                    products.map(product => 
                        <tr key={product.ProductId}>
                            <td>{product.Name}</td>
                            <td>{product.Price}</td>
                            <td>
                                <Link to={"/cruddetails/" + product.ProductId} className="btn btn-info" >
                                      <span className="bi bi-eye"></span> 
                                </Link>
                            </td>
                            <td>
                                <Link to={"/update/" + product.ProductId} className="btn btn-warning">
                                     <span className="bi bi-pen"></span>
                                </Link>
                            </td>
                            <td>
                                <button value={product.ProductId}  className="btn btn-danger" onClick={DeleteClick} >
                                   <span className="bi bi-trash"></span>
                                </button>
                            </td>
                        </tr>
                    )
                  }
               </tbody>
           </table>
        </div>
    )
}