(function(){
  'use strict';
  var App = window.App || {};
  // Constructor 'Principal'
  function BaseOrder(email){
    this.email = email;
  }
  BaseOrder.prototype.displayOrder = function(){
    console.log('Pedido para: ' + this.email);
  }
  // Constructor que extiende la función del constructor 'Principal'
  function ItemOrder(email, item, price){
    BaseOrder.call(this, email);  // Llama al constructor 'Principal'
    this.item = item;
    this.price = price;
  }
  /*  El método Object.create() crea un objeto nuevo, utilizando un objeto existente
  como el prototipo del nuevo objeto creado.  */
  ItemOrder.prototype = Object.create(BaseOrder.prototype);
  ItemOrder.prototype.constructor = ItemOrder;      // Es una buena práctica
  /* Los prototipos tienen una propiedad llamada constructor, cuando no se altera
  el prototipo, esa propiedad NO cambia. En este caso de cambión en la línea #16 */

  ItemOrder.prototype.displayOrder = function(){
    BaseOrder.prototype.displayOrder.call(this);  // Llama a la primera función 'displayOrder' de la Línea #8
    console.log('Item: ' + this.item + " Precio: $" + this.price);
  };

  App.ItemOrder = ItemOrder;
  window.App = App;
}());
