const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '算法导论',
        price: 65.00,
        count: 1
      },
      {
        id: 2,
        name: 'unix编程艺术',
        price: 65.00,
        count: 1
      },
      {
        id: 3,
        name: '编程珠玑',
        price: 65.00,
        count: 1
      }
    ]
  },
  methods: {
    decrement(index){
      this.books[index].count--;
    },
    increment(index){
      this.books[index].count++;
    },
    removeHandle(index){
      console.log(index);
      this.books.splice(index,1);
    }
  },
  computed: {
    countPrice(){
      return this.books.reduce(((pre, n) => pre + n.price * n.count),0);
    }
  },
  // 过滤器
  filters: {
    showPrice(price){
      return '$' + price.toFixed(2);
    }
  }
})

// 高阶函数 过滤，判断小于一百的数，返回新数组
const nums = [10,222,333,4,55,234,32,414,231,41,4,2314,4,12412,4,41,124,1,4];
let newNums = nums.filter(function (n) {
  return n < 100;
})

// 数组中的值*2，返回新数组
let newNums2 = nums.map(function (n) {
  return n * 2;
})

// 汇总，对数组中的值汇总，0是pre的初始化，函数返回值为pre的新值
let newNum3 = nums.reduce(function (pre, n) {
  return pre + n;
},0)
