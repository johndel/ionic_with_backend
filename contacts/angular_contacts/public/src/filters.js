angular.module("ContactsApp")
  .filter("labelUnderscore", function() {
    return function(input) {
      input = input.replace(/_/g, ' ');
      return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
  })
  .filter("labelCase", function() {
    return function(input) {
      input = input.replace(/([A-Z])/g, ' $1');
      console.log(input);
      return input[0].toUpperCase() + input.slice(1);
    }
  });