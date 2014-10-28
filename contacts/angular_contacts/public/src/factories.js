angular.module('ContactsApp')
  .factory('Contact', function($resource){
    return $resource('http://192.168.1.52:3000/contacts/:id.json', { id: "@id" }, {
      'update': { method: "PUT" }
    });
  });