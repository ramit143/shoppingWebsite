import { Formik,Form,Field,ErrorMessage } from "formik";
import * as yup  from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

export function CrudCreate () {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [ErrorId, setErrorId] = useState('');
    const [colorId,setColorId] = useState({color:''});

    useEffect(() =>{
        axios({
            method:'get',
            url:'http://127.0.0.1:8080/products'
        }).then(res =>{
            setProducts(res.data);
        })
    },[])
    function VerifyProductId (e) {
         var id = parseInt(e.target.value);
         for (var product of products) {
             if (product.ProductId===id) {
                setErrorId("Already taken - Try Another");
                setColorId({color:'red'})
                break;
             } else if (e.target.value==="") {
               setErrorId("");
             } else {
                setErrorId("This Id is Available")
                setColorId({color:'green'});
             }
         }
    }

    return (
        <div className="container-fluid">
            <h2>Add New Product</h2>
            <Formik
             initialValues={{
                ProductId:0,
                Name:"",
                Price:0,
                Stock:false
             }} 
             validationSchema={
                yup.object({
                    ProductId:yup.number().required("ProductId Required"),
                    Name : yup.string().required("Product Name required"),
                    Price: yup.number().required("Price Required"),
                    Stock:yup.boolean().required("Stock required")
                })
             }
             onSubmit={
                (values) =>{
                    axios({
                        method:"post",
                        url:"http://127.0.0.1:8080/addproducts",
                        data:values
                    }).then(() =>{
                        alert("Product Inserted");
                        navigate("/products")
                    })
                }
             }
            >
            {
                <Form>
                     <dl>
                        <dt>ProductId</dt>
                        <dd>
                            <Field name="ProductId" type="number" onKeyUp={VerifyProductId} />
                        </dd>
                        <dd style={colorId}>{ErrorId}</dd>
                        <dd className="text-danger">
                            <ErrorMessage name="ProductId" />
                        </dd>
                        <dt>Product Name</dt>
                        <dd>
                            <Field name="Name" type="text" />
                        </dd>
                        <dd className="text-danger">
                            <ErrorMessage name="Name" />
                        </dd>
                        <dt>Price</dt>
                        <dd>
                            <Field name="Price" type="number" />
                        </dd>
                        <dd className="text-danger">
                            <ErrorMessage name="Price" />
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch"><Field name="Stock" className="form-check-input" type="checkbox" /> Available</dd>
                        <dd className="text-danger">
                            <ErrorMessage name="Stock" />
                        </dd>
                     </dl>
                     <button className="btn btn-primary">Add Product</button>
                     <Link to="/products" className="btn btn-success ms-2">View Products</Link>
                </Form>
            }

            </Formik>
        </div>
    )
}