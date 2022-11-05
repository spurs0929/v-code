// 判斷傳入值是否為Array
export function isArray(data){
  return Object.prototype.toString.call(data) === '[object Array]';
}