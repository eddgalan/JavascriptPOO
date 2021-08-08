// Constructor
function DataStore(){
  this.data = {};
}
// Función que agrega una nueva propiedad al objeto
DataStore.prototype.add = function(key, value){
  this.data[key] = value;
}
// Función que devuelve una propiedad del objeto
DataStore.prototype.get = function(key){
  return this.data[key];
}
// Función que devuelve todas las propiedades del objeto
DataStore.prototype.getAll = function(){
  return this.data;
}
// Función que remueve una propiedad
DataStore.prototype.remove = function(key){
  delete this.data[key];
}
