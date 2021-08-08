// Constructor
function DataStore(){
  this.data = {};
}
// Definimos la función 'add' dentro del prototipo
DataStore.prototype.add = function(key, value){
  this.data[key] = value;
}
/*
Se agregó el método add al prototipo. De esta forma el método sólo aparece una vez en el objeto
ver el console.log() del objeto en el apartado prototype debe aparecer el método 'add'
*/
