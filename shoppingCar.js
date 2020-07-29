const app = new Vue({
  el: '.shoppingCar',
  data: {
    books: [{
        name: '《html》',
        date: '2020-07',
        price: 66,
        count: 0
      },
      {
        name: '《css》',
        date: '2020-05',
        price: 77.7,
        count: 0
      },
      {
        name: '《java》',
        date: '2020-02',
        price: 88,
        count: 0
      },
      {
        name: '《vue》',
        date: '2020-06',
        price: 99,
        count: 0
      }
    ],
  },
  methods: {
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      if (this.books[index].count > 0) {
        this.books[index].count--;
      }
    },
    del(index) {
      this.books.splice(index, 1);
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      for (let i = 0; i < this.books.length; i++) {
        totalPrice += this.books[i].price * this.books[i].count;
      }
      return totalPrice;
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(1);
    }
  }
});