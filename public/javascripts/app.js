var app = angular.module('afriens', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/main.html',
        controller: 'MainController'
      }).
      when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
  
  app.controller('MainController', function($scope, $route, $window){
  
  $scope.formSub = function(){
	  username = $scope.username;
	  password = $scope.password;
	  console.log('username :: ' + username + ' password :: ' + password);
	  $window.location.href = '/#/home';
  };
  $scope.cancel = function(){
	  $route.reload();
  };
  });
  
  app.controller('HomeController', function($scope, $window){
  $scope.title = 'Home Page';
  
  });
