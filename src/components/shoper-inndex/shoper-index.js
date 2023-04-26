import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import { CrudCreate } from "../../crud-operations/crud-create";
import { CrudDetails } from "../../crud-operations/crud-details";
import { CrudIndex } from "../../crud-operations/crud-index";
import { CrudUpdate } from "../../crud-operations/crud.update";
import { ShopperCategory } from "../../shopper-category/shopperCategory";
import { ShopperDetails } from "../../shopper-details/shopperDetails";
import { ShopperInvalid } from "../../shopper-invalid/shopper-invalid";
import { ShopperLogin } from "../../shopper-login/shopperLogin";
import { ShopperRegister } from "../../shopper-register/shopper-register";
import { ShopperHome } from "../shopper-home/shopper-home";
import { ShopperJewelery } from "../shopper-jewelery/shopper-jewelery";
import { useParams } from "react-router-dom";
import {useCookies} from "react-cookie";

export function ShopperIndexComponent () {
    const [cookies,setCookie,removeCookie] = useCookies();
    const params = useParams();
    return (
        <div className="container-fluid">
             <BrowserRouter>
                <header className="d-flex justify-content-between  p-1">
                    <div>
                        <h2>Shopper</h2>
                    </div>
                    <nav className="d-flex">
                        <div className="me-3"><Link to="home" className="btn" >Home</Link></div>
                        <div className="me-3"><Link to="products" className="btn" >Products</Link></div>
                        <div><Link to="register" className="btn">Register</Link></div>
                        <div className="me-3"><Link to="category/men's clothing" className="btn" >Men's Fashion</Link></div>
                        <div className="me-3"><Link to="category/women's clothing" className="btn">Women's fashion</Link></div>
                        <div className="me-3" ><Link to="category/jewelery" className="btn" >Jewelery</Link></div>
                        <div className="me-3"><Link  to="category/electronics" className="btn">Electronics</Link></div>
                    </nav>
                    
                    <div>
                        <span className="bi bi-search me-3"></span>
                        <Link to="register" className="me-3"><span className="bi bi-person"></span></Link>
                        <span className="bi bi-heart me-3"></span>
                        <span className="bi bi-cart4 me-3"></span>
                        <div>
                        <span><span className="bi bi-person me-3"></span>{cookies["userid"]}</span>
                        </div>
                    </div>
                </header>
                <div className="bg-dark text-white mt-2 text-center p-1">
                    ⚡️ HAPPY HOLIDAY DEALS ON EVERYTHING ⚡️
                </div>
                <div className="mt-3">
                    <Routes>
                        <Route path="/" element={<ShopperHome />}></Route>
                        <Route path="register" element={<ShopperRegister /> } />
                        <Route path="home" element={<ShopperHome />}></Route>
                        <Route path="category/:catname" element={<ShopperCategory /> }></Route>
                        <Route path="details/:id" element={<ShopperDetails /> } /> 
                        <Route path="login" element={<ShopperLogin />} />
                        <Route path="invalid" element={<ShopperInvalid /> } />
                        <Route path="products" element={<CrudIndex />}/>
                        <Route path="NewProduct"  element={<CrudCreate /> }/>
                        <Route path="update/:id" element={<CrudUpdate /> } />
                        <Route path="cruddetails/:id" element={<CrudDetails /> }/>
                    </Routes>
                </div>
             </BrowserRouter>
        </div> 
    )
}