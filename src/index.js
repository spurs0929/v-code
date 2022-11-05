import Vue from '../vue';

let vm = new Vue({
  el: '#app',
  data(){
    return {
      title: '學生列表',
      className: 1,
      total: 2,
      teacher: ['張三', '李四'],
      info: {
        a: {
          b: 1
        }
      },
      students: [
        {
          id: 1,
          name: '小紅'
        },
        {
          id: 2,
          name: '小明'
        }
      ],
      test: [
        [
          {
            a: 2,
            b: 3,
            e: [
              {
                f: 6
              }
            ]
          }
        ],
        [ 
          {
            c: 4,
            d: 5,
            g: [
              {
                h:7
              }
            ]
          }
        ]
      ]
    }
  }
});

console.log(vm);
