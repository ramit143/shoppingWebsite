import { useState,useEffect } from "react";

export function ShopppingCart (props) {
    const [count , setCount] = useState(0);
    useEffect(() =>{
        alert("item added");
        var c = count + 1;
        setCount(c);
        console.log(c)
    },[count])
    return(
        <div className="container m-4 p-4">
         
         <span className="bi bi-cart4"></span> {count}

        </div>
    )

}

export function ParentToChildDataWithUseEffect () {
    const [component  , setComponent] = useState('');

    function AddClick () {
        setComponent(<ShopppingCart />)
    }

    return (
        <div className="container-fluid mt-4">
            <button className="btn btn-success" onClick={AddClick} >Add to Cart</button>

             <div className="position-absolute top-0 end-0">
                  {
                    component
                  }
             </div>
        </div>
    )
}

