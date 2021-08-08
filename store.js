(function(){
  'use strict';
  var App = window.App || {};

  // Constructor
  function Store(storeId, db){
    this.storeId = storeId;
    this.db = db; // Composición
  }

  App.Store = Store;
  window.App = App;
}());
