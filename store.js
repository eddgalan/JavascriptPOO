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
    /*  El siguiente código manda un error por la variable 'this' el valor de 'this'
    es relativo depende donde se encuentre  */
    // customerEmails.forEach(function(email){
    //   console.log(this.db.get(email));
    // });

    /* Tenemos dos métodos para solucionar este error, el primero sería el siguiente: */
    // var self = this;
    // customerEmails.forEach(function(email){
    //   console.log(self.db.get(email));
    // });

    /* La otra solución sería la siguiente: */
    customerEmails.forEach(function(email){
      console.log(this.db.get(email));
    }.bind(this));
    /* El método bind() crea una nueva función, que cuando es llamada,
    asigna a su operador  this el valor entregado */
  };

  App.Store = Store;
  window.App = App;
}());
