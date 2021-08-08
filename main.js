(function(window){
  'use strict';
  var App = window.App;
  var DataStore = App.DataStore;
  var Store = App.Store;
  var Order = App.Order;

  var datastore = new DataStore();
  var store = new Store('Alpha-00', datastore);
  var order = new Order('email@correo.com', 'PS4', 8999);

  store.createOrder(order);
  store.printOrders();
}(window));
