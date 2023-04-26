import { useReducer } from "react";

let initialState = {count:0};

function reducer (state,action) {
          switch(action.type) {
            case "join" :
                return {count:state.count+1};
            case "exit" :
                return {count:state.count-1}    
          }
}

export function UseReducerComponent () {
    const [state,dispatch] = useReducer(reducer,initialState);

    function JoinClick () {
         dispatch({type:"join"})
    }
    function ExitClick () {
         dispatch({type:"exit"})
    }
    return (
        <div className="container-fluid">
        <h2>UseReducer demo</h2><span className="bi bi-youtube text-danger"></span><span className="text-success">{state.count}</span><br/>
         <button onClick={JoinClick} className="btn btn-primary ms-2">Join</button>
         <button onClick={ExitClick} className="btn btn-danger ms-2">Exit</button>
        </div>
    )
}