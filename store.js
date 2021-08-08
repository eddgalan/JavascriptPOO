(function(){
  'use strict';
  var App = window.App || {};

  // Constructor
  function Store(storeId, db){
    this.storeId = storeId;
    this.db = db; // Composición
  }

  Store.prototype.createOrder = function(order){
    console.log('Agregando pedido para: '+ order.email);
    this.db.add(order.email, order);
  };
  // Entrega un pedido
  Store.prototype.deliverOrder = function(email){
    console.log('Entrega de pedido para: '+ email);
    this.db.remove(email);
  };
  // Muestra todos los pedidos
  Store.prototype.printOrders = function(){
    console.log('Store #'+ this.storeId + ' tiene pedidos pendientes');
    // Obtiene todos los emails de los pedidos
    var customerEmails = Object.keys(this.db.getAll());
    for( let email of customerEmails ){
      console.log(this.db.get(email));
    }
  };

  App.Store = Store;
  window.App = App;
}());
