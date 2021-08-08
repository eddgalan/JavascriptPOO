var datastore = new DataStore();
// Agregar propiedades al objeto
datastore.add('Nombre', 'Alpha Store');
datastore.add('Dirección', 'CDMX');
datastore.add('CodigoPostal', '56260');
// Muestra el objeto en la consola del navegador
console.log(datastore);
// Muestra una propiedad del objeto haciendo uso de la función 'get' que definimos en el datastore.js
console.log(datastore.get('Nombre'));
// Muestra todos los datos del objeto datastore haciendo uso de la función 'getAll'
console.log(datastore.getAll());
// Remueve una propiedad del objeto datastore haciendo uso de la función 'remove'
datastore.remove('CodigoPostal');
// Muestra el objeto datastore (Ya no muestra la propiedad 'CP' porque la removimos)
console.log(datastore.getAll());
