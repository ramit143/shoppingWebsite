import { useState, useEffect } from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import { Formik,Form,Field } from "formik";


export function CrudUpdate () {
    const [product,setProduct] = useState([{ProductId:0,Name:'',Price:0,Stock:false}]);
    const [handleName,setHandleName] = useState('');
    const [handlePrice,setHandlePrice] = useState(0);
    const [handleStock,setHandleStock] = useState(true);
    const params = useParams();
    useEffect(() =>{
        axios({
            method:"get",
            url:`http://127.0.0.1:8080/details/${params.id}`
        })
        .then(res => {
            setProduct(res.data)
        })
    },[])

    function HandleName (e) {
         setHandleName(e.target.value)
    }
    function HandlePrice (e) {
        setHandlePrice(e.target.value)
    }
    function HandleStock (e) {
       setHandleStock(e.target.checked);     
    }
    return (
        <div className="container-fluid">
           <h2>Edit Product</h2>
           <Formik
             initialValues={{
                Name: product[0].Name,
                Price: product[0].Price,
                Stock: product[0].Stock
             }}
           >
              {
                <Form>
                    <dl>
                        <dt>Name</dt>
                        <dd>
                            <Field type="text" name="Name" value={handleName} onChange={HandleName} ></Field>
                        </dd>
                        <dt>Price</dt>
                        <dd>
                            <Field type="text" name="Price" value={handlePrice} onChange={HandlePrice} ></Field>
                        </dd>
                        <dt>Stock</dt>
                        <dd>
                            <Field type="checkbox"  name="Stock" checked={handleStock} onChange={HandleStock} ></Field>
                        </dd>
                    </dl>
                    <button className="btn btn-success">Save</button>

                    <Link to="/products" className="btn"><h6 style={{color:'red'}}>Back To Products</h6></Link>
                </Form>
              } 
           </Formik>
        </div>
    )
}