import { ARRAY_METHODS } from "./config";
import observerArr from "./observerArr";

var originArrayMethods = Array.prototype,
    arrayMethods = Object.create(Array.prototype);

ARRAY_METHODS.map(function(value){
  arrayMethods[value] = function(){
    var args = Array.prototype.slice.call(arguments),
        rt = originArrayMethods[m].apply(this, args);

    var newArr;
    
    switch(value){
      case 'push':
      case 'unshift':
        newArr = args;
        break;
      case 'splice':
        newArr = args.slice(2);
        break;
      default: 
        break;  
    }

    newArr && observerArr(newArr);
    return rt;
  }
});

export {
  arrayMethods
}