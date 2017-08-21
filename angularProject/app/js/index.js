var app = angular.module('myFirstApp',['ui.router']);

app.controller('myLoginForm',function( $scope, $state ){

	$scope.submit = function( loginInfo ){

		var eamil			=	loginInfo.email;
		var password	=	loginInfo.password;
	  $state.go('dashboard');
	}

});

app.config(function($stateProvider,$urlRouterProvider){

$urlRouterProvider.otherwise('/login');

	$stateProvider

	.state('login',{
		url : '/login',
		templateUrl : 'views/login.html',
		controller : 'myLoginForm'
	})

	.state('dashboard',{
			url : '/dashboard',
			templateUrl : 'views/dashboard.html',
			controller : 'dashboardController'
	})

	.state('dashboard.singup',{
		url : '/singup',
		templateUrl : 'views/singup.html',
		controller : 'singupController'
	});

	.state('dashboard.form',{
		url : '/firstformlyform',
		templateUrl : 'views/firstformlyform.html',
		controller : 'formlyMainController'
	});

});
