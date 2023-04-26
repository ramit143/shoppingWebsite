

//...use of this hooks , you can see in Reducer-Demo...//

export function useCaptcha () {
    var a = Math.random();
    var b = Math.random();
    var c = Math.random();
    var d = Math.random();
    var e = Math.random();
    var f = Math.random();

 
   var code = `${Math.round(a)} ${Math.round(b)} ${Math.round(c)} ${Math.round(d)} ${Math.round(e)} ${Math.round(f)}`
    
   return code;
}
