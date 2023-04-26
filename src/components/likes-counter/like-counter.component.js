import { useState } from "react"

export function LikesCounter () {
    const [counter,setCounter] = useState(0);

    function handleIncrement () {
        setCounter((counter) => counter + 1);
    }

    function handleDecrement () {
        setCounter((counter) => counter - 1);
    }
    return (
        <div>
            <a href="#">Home</a>
            <span data-testid="counter">{counter}</span>
            <div>
                <button data-testid="increment" onClick={handleIncrement}>Increment</button>
                <button data-testid="decrement" onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    )
}