import { Formik,useFormik,Form,Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";


export function ShopperRegister () {
    const navigate = useNavigate();
    const [users,setUsers] = useState([]);
    const [ErrorUser, setErrorUser] = useState('');
    const [colorErrorUser,setColorErrorUser] = useState({color:''})
    useEffect(() =>{
         axios({
            method:'get',
            url:'http://127.0.0.1:8080/users'
         }).then(res =>{
            setUsers(res.data)
           
         })
    },[])

    function VerifyUserId (e) {
        for (var user of users) {
          if (user.UserId===e.target.value) {
              setErrorUser("Already taken - Try Another");
              setColorErrorUser({color:'red'});
              break;
          } else if (e.target.value=="") {
             setErrorUser("");
          }  else {
            setErrorUser("This UserId is Available");
            setColorErrorUser({color:'green'})
          }
        }
    }

    return (
        <div className="container-fluid">
        <h2>Register User</h2>
        <Formik
        initialValues={{
            UserId: "",
            UserName: "",
            Password: "",
            Email: "",
            Age: 0,
            Mobile:""
        }}
        validationSchema={
            yup.object({
                UserId : yup.string().required("UserId Required"),
                UserName : yup.string().required("UseName Required"),
                Password: yup.string().required("Password Required").matches(/(?=.*[A-Z])\w{4,15}/,"password length should be of 4 to 15 with uppercase latter"),
                Email: yup.string().required("Email Required").email("Invalid Email"),
                Age: yup.number().required("Age Required"),
                Mobile: yup.string().required("Mobile Required").matches(/\+91\d{10}/)
            })
        }
        onSubmit={
            (values) => {
                axios({
                    method:"post",
                    url:"http://127.0.0.1:8080/registeruser",
                    data: values
                })
                .then(() => {
                    alert("Registed Successfully..");
                    navigate("/login");

                })
            }
        }
        >
        {
            <Form>
            <dl>
                <dt>User Id</dt>
                <dd>
                    <Field type="text" name="UserId" onKeyUp={VerifyUserId}  />
                </dd>
                <dd style={colorErrorUser}>{ErrorUser}</dd>
                <dd className="text-danger">
                    <ErrorMessage  name="UserId" />
                </dd>
                <dt>UserName</dt>
                <dd>
                    <Field type="text" name="UserName" />
                </dd>
                <dd className="text-danger">
                    <ErrorMessage name="UserName" />
                </dd>
                <dt>Password</dt>
                <dd>
                    <Field type="password" name="Password" />
                </dd>
                <dd className="text-danger">
                    <ErrorMessage  name="Password" />
                </dd>
                <dt>Email</dt>
                <dd>
                    <Field type="email" name="Email" />
                </dd>
                <dd className="text-danger">
                    <ErrorMessage  name="Email" />
                </dd>
                <dt>Age</dt>
                <dd>
                    <Field type="number" name="Age" />
                </dd>
                <dd className="text-danger">
                    <ErrorMessage  name="Age" />
                </dd>
                <dt>Mobile</dt>
                <dd>
                    <Field type="text" name="Mobile" />
                </dd>
                <dd className="text-danger">
                    <ErrorMessage  name="Mobile" />
                </dd>
            </dl>
            <button className="btn btn-primary">Register</button>
            <Link to="/login" className="ms-2" >Exiting  User?Login</Link>
        </Form>

        }
        </Formik>

        </div>
    )
}