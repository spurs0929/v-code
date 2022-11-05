import Observer from './observer';

// 觀察者
function observe(data){
  if(typeof data !== 'object' || data === null) return;
  return new Observer(data);
}

export default observe;