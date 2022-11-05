import observe from "./observe";

function defineReactiveData(data, key, value){
  // data為物件 -> 遞迴觀察
  observe(value);
  Object.defineProperty(data, key, {
    get(){
      console.log(data);
      return value;
    },
    set(newValue){
      if(newValue === value) return;
      observe(newValue);
      value = newValue;
    }
  });
}

export default defineReactiveData;