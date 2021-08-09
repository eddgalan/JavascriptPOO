/*
Cuando se crea una aplicación con varios ficheros .js existe la posibilidad de que
tenga algunos errores en especial si la aplicación es muy grande ya que todos los
archivos.js trabajan como si fuera un solo archivo y algunas variables pueden tener
un alcance global
*/

(function(window){
  'use stric';    // Es buena práctica colocarla. Optimiza el código y previene errores
  // Declara App = window.App pero si window.App no existe (undefined) App = {} (Objeto vacío)
  var App = window.App || {};
  // Constructor
  function DataStore(){
    this.data = {};
  }

  DataStore.prototype.add = function(key, value){
    this.data[key] = value;
  }

  DataStore.prototype.get = function(key){
    return this.data[key];
  }

  DataStore.prototype.getAll = function(){
    return this.data;
  }

  DataStore.prototype.remove = function(key){
    delete this.data[key];
  }

  App.DataStore = DataStore;
  window.App = App;
}(window));   //IIFE | La función se llama a sí misma envíandose el argumento 'window'
