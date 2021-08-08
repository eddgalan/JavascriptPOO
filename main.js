(function(window){
  'use strict';
  var App = window.App;
  var DataStore = App.DataStore;
  var Store = App.Store;
  var ItemOrder = App.ItemOrder;

  var datastore = new DataStore();
  var store = new Store('Alpha-00', datastore);
  var order = new ItemOrder('correo@dominio.com', 'Play Station 4', 8999);

  store.createOrder(order);
  store.printOrders();

  console.log(window);
}(window));
