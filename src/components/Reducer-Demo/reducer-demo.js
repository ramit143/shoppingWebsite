import { useReducer } from "react";
import { useCaptcha } from "../../Hooks/captcha.hooks";
import { useChangecase } from "../../Hooks/changeCase.hooks";

let initialState = {count:0};

function reducer (state,action) {
    switch(action.type) {
        case "join" :
            return {count:state.count + 1};
        case "exit" :
            return {count:state.count - 1};   
    }

}



export function ReducerDemo () {
  
    const [state,dispatch] = useReducer(reducer,initialState);

    const msg = useChangecase("weLcoME To rEaCT"); // ... this is a Custom Hooks ... //
    const captcha = useCaptcha();

    function JoinClick () {
        dispatch({type:"join"});
    }

    function ExitClick () {
        dispatch({type:"exit"});
    }

     return(
        <div className="container-fluid">
        <h2>Live<span className="bi bi-youtube"></span>Video Streaming</h2>
        <h3 className="text-danger">{msg}</h3>

        <dl>
            <dt>Your Id</dt>
            <dd>
                <input type="text" />
            </dd>
            <dt>Verify Code</dt>
            <dd>
                {captcha}
            </dd>
        </dl>

        <h4>{state.count}Watching</h4>

        <button className="btn btn-primary me-2" onClick={JoinClick} >Join</button>
        <button className="btn btn-danger" onClick={ExitClick} >Exit</button>

        </div>
     )
}