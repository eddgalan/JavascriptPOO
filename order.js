(function(){
  'use strict';
  var App = window.App || {};
  // Constructor
  function Order(email, item, price){
    this.email = email;
    this.item = item;
    this.price = price;
  }
  App.Order = Order;
  window.App = App;
}());
