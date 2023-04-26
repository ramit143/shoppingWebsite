import { useState } from "react";

export function ShopppingCart (props) {
    return(
        <div className="container m-4 p-4">
         
         <span className="bi bi-cart4"></span> {props.num}

        </div>
    )

}

export function ParentToChildDataThroughProps () {
    const [count , setCount] = useState(0);

    function AddClick () {
        alert("item added")
        var c = count + 1
        setCount(c)
        console.log(count)
    }

    return (
        <div className="container-fluid mt-4">
            <button className="btn btn-success" onClick={AddClick} >Add to Cart</button>

             <div className="position-absolute top-0 end-0">
                  <ShopppingCart num={count} />
             </div>
        </div>
    )
}