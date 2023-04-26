import {useCookies} from "react-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";




export function ShopperHome () {
  const [cookies,setCookie,removeCookie] = useCookies();
  const navigate = useNavigate();
  function SignOutClick () {
    removeCookie("userid");
    navigate("/login")
  }
  useEffect(() => {
      if (cookies["userid"]==undefined) {
         navigate("/login")
      }
  },[])
    return (
<div className="container-fluid d-flex justify-content-between">
     <div>
       <div className="d-flex justify-content-between mt-4">
          <div>
            <img src="electronics.jpg" style={{width:'300px',height:'300px'}} />
          </div>
          <div>
            <img src="men.jpg" style={{width:'300px',height:'300px'}} />
          </div>
          <div>
            <img src="women.jpg" style={{width:'300px',height:'300px'}} />
          </div>
          <div>
            <img src="jewelery.jpg" style={{width:'300px',height:'300px'}} />
          </div>
        </div>
      </div>
      
      <div>
          <button onClick={SignOutClick} className="btn btn-primary">SignOut</button>
      </div>

 </div>
    )
}