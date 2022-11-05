import defineReactiveData from "./reactive";
import { isArray } from "./utils"
import { arrayMethods } from './array';
import observerArr from "./observerArr";

function Observer(data){
  // data為陣列
  if(isArray(data)){
    Object.setPrototypeOf(data, arrayMethods);
    observerArr(data);
  }else{
    // data為物件
    this.walk(data);
  }
}

Observer.prototype.walk = function(data){
  var keys = Object.keys(data);

  for(var i = 0; i < keys.length; i++){
    var key = keys[i],
        value = data[key];

    defineReactiveData(data, key, value);    
  }    
}

export default Observer;