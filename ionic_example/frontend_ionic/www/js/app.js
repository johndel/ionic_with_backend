angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: "/tab",
      templateUrl: "templates/tabs.html"
    })
    .state('tab.login', {
      url: '/login',
      views: {
        'tab-login': {
          templateUrl: 'templates/tab-login.html',
          controller: 'LoginCtrl'
        }
      }
    })
    
    .state('tab.about', {
      url: '/about',
      views: {
        'tab-about': {
          templateUrl: 'templates/tab-about.html',
          controller: 'AboutCtrl'
        }
      }
    })
    
    .state('tab.logout', {
      url: '/logout',
      controller: 'LogoutCtrl'
    })
    
    .state('tab.user', {
      url: '/user',
      views: {
        'tab-user': {
          templateUrl: 'templates/tab-user.html',
          controller: 'HomeCtrl'
        }
      }
    });
  $urlRouterProvider.otherwise('/tab/about');
})

.controller('LoginCtrl', function($rootScope, $scope, $state, $http) {
    toggle_navbar(true);

  $scope.login = function(user) {
    $scope.loading = true;
    if(typeof(user) != "undefined" && typeof(user.email) != "undefined" && typeof(user.email) != "undefined") {

      $http({method: 'POST', 
             url: "http://yourapp.herokuapp.com/api/users", 
             data: $.param({"email": user.email, "password": user.password}), 
             headers: {'Content-Type': 'application/x-www-form-urlencoded'}
           }).then(function(resp) {
        if(resp["data"]["message"] == "Success") {
          toggle_navbar(false);
          $rootScope.user = user;
          $rootScope.user.uploads = resp["data"]["uploads"];
          $state.go('tab.user');
        } else {
          $scope.error_message = "Λάθος email ή κωδικός."
        }    
      }, function() {
        $scope.error_message = "Αποτυχία σύνδεσης. Έχετε internet;"
      });

    } else {
      $scope.error_message = "Παρακαλούμε συμπληρώστε τα στοιχεία."
    }
    $scope.loading = false;
  };
})
.controller('LogoutCtrl', function($rootScope, $scope, $state, $http) {
  $scope.logout = function() {
    $rootScope.user = "";
    $state.go("tab.login");
  }
})
.controller('AboutCtrl', function($rootScope, $scope, $state, $http) {
  if($rootScope.user) {
    toggle_navbar(false);
  } else {
    toggle_navbar(true);
  }
})
.controller('HomeCtrl', function($rootScope, $scope, $state, $http) {
  console.log($rootScope.user);
  if($rootScope.user == undefined || $rootScope.user == "") {
    toggle_navbar(true);
    $state.go('tab.login');
  } else {
    
    $http({method: 'POST', 
           url: "http://yourapp.herokuapp.com/api/users", 
           data: $.param({"email": $rootScope.user.email, "password": $rootScope.user.password}), 
           headers: {'Content-Type': 'application/x-www-form-urlencoded'}
         }).then(function(resp) {
      if(resp["data"]["message"] == "Success") {
        toggle_navbar(false);
        $rootScope.user.uploads = resp["data"]["uploads"];
        $state.go('tab.user');
      } else {
        $scope.error_message = "Λάθος email ή κωδικός."
        $state.go('tab.login');
      }    
    }, function() {
      $scope.error_message = "Αποτυχία σύνδεσης. Έχετε internet;"
      $state.go('tab.login');
    });
         
  }
  
  $scope.click_link = function(url) {
    console.log(url);
    window.open(url, '_system', 'location=yes');
  }
});

