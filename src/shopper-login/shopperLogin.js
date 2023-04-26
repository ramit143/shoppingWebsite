 import { Formik,Form,Field,ErrorMessage,useFormik } from "formik";
 import axios from "axios";
 import * as yup from "yup";
 import { useNavigate } from "react-router-dom";
 import { Link } from "react-router-dom";
 import {useCookies} from "react-cookie"

export function ShopperLogin () {
    const navigate = useNavigate();
    const [cookies,setCookies,removeCookies] = useCookies();
    return (
        <div className="container-fluid">
        <h2>User Login</h2>
        <Formik
        initialValues={{
            UserId:"",
            Password:""
        }}
        validationSchema={
            yup.object({
                UserId: yup.string().required("UserId Required"),
                Password:yup.string().required("Password Required")
            })
        }
        onSubmit={
            (values) => {
                axios({
                    method:"get",
                    url:"http://127.0.0.1:8080/users"
                }).then((response) => {
                    for (var user of response.data) {
                        if (user.UserId==values.UserId && user.Password==values.Password) {
                           setCookies("userid",values.UserId) 
                           navigate("/home");
                           break;
                        } else {
                            navigate("/invalid");
                        }
                    }
                })
            }
        }
        >
            {
                <Form>
                    <dl>
                        <dt>User Id</dt>
                        <dd><Field type="text" name="UserId" /> </dd>
                        <dd className="text-danger">
                            <ErrorMessage name="UserId" />
                        </dd>
                        <dt>Password</dt>
                        <dd><Field type="password" name="Password" /> </dd>
                        <dd className="text-danger">
                            <ErrorMessage name="Password" />
                        </dd>
                    </dl>
                    <button className="btn btn-success">Login</button>
                    <div>
                        <Link to="/register">New User ? Register</Link>
                    </div>
                </Form>
            }
        </Formik>

        </div>
    )
}