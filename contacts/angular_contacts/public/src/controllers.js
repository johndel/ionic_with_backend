angular.module('ContactsApp')
  .controller('ListController', function($scope, Contact, $location) {
    $scope.contacts = Contact.query();
    $scope.fields = ['firstName', 'lastName'];
    $scope.sort = function(field) {
      $scope.sort.field = field;
      $scope.sort.order = !$scope.sort.order;
    };
    
    $scope.show = function(id) {
      $location.url("/contacts/" + id );
    }
    
    $scope.sort.field = 'first_name';
    $scope.sort.order = false;
    
  })
  .controller("NewController", function($scope, Contact, $location) {
    $scope.contact = new Contact({
      firstName: ["", "text"],
      lastName: ["", "text"],
      mail: ["", "email"],
      cell: ["", "tel"],
      birthday: ["", "date"],
      site: ["", "url"],
      street: ["", "text"],

    });
    
    $scope.save = function() {
      if($scope.newContact.$invalid) {
        $scope.$broadcast("record:invalid");
      } else {
        $scope.contact.$save();
        $location.url("/contacts");
      }
    };
  });