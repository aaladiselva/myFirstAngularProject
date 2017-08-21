
app.controller('singupController',function( $scope ){

	$scope.reset = function(){
		$scope.user.email		=	'';
		$scope.user.password	=	'';
		$scope.user.repassword	=	'';
		$scope.user.firstname	=	'';
		$scope.user.lastname	=	'';
	}

	$scope.submit = function(){
		//console.log( $scope.user );
	}

});

app.controller('loginForm',function( $scope ){

	$scope.submit = function(){
		//console.log( $scope.user );
	}

});
