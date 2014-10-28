angular.module('ContactsApp', ['ngRoute', 'ngResource', 'ngMessages'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/contacts", {
        controller: "ListController",
        templateUrl: "views/list.html"
      })
      .when("/contacts/new", {
        controller: "NewController",
        templateUrl: "views/new.html"
      });
    $locationProvider.html5Mode(true);
  });
