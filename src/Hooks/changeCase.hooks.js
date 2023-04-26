
//...use of this hooks , you can see in Reducer-Demo...//
export function useChangecase (str) {
     var firstChar = str.charAt(0);
     var restChars = str.substring(1);

     var sentence = firstChar.toUpperCase() + restChars.toLowerCase();
     return sentence;
}