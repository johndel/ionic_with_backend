angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
// .factory('request', function() {
//   return {
//     askServer: function() {
//        $http({method: 'POST', 
//              url: "http://192.168.1.52:3000/api/users", 
//              data: $.param({"email": user.email, "password": user.password}), 
//              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//            }).then(function(resp) {
//         if(resp["data"]["message"] == "Success") {
//           toggle_navbar(true);
//           $rootScope.user = user;
//           $rootScope.user.uploads = resp["data"]["uploads"];
//           $state.go('tab.user');
//         } else {
//           $rootScope.user = "";
//           $rootScope.user.uploads = "";
//           $scope.error_message = "Λάθος email ή κωδικός."
//         }
//       }, function() {
//         $scope.error_message = "Αποτυχία σύνδεσης. Έχετε internet;"
//       });
//     }
//   };
// });
