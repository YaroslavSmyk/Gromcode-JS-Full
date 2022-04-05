'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.id = Math.random().toString(36).slice(-10);
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = new Date();
  }
  checkPrice(price) {
    debugger;
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder(dateConfirmed) {
    if (this.dateConfirmed !== null) {
      this.isConfirmed = true;
      dateConfirmed = new Date();
    }
  }

  isValidType(type) {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}
// const a = Order.checkPrice(5)
// console.log(Order.checkPrice(5))

const order1 = new Order(5000, 'Paris', 'fkyk');
console.log(order1.checkPrice(5000));
