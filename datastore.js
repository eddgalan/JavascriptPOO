// Constructor
function DataStore(){
  this.data = {};
  this.add = function(key, value){
    this.data[key] = value;
  }
}
