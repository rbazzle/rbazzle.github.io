var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	
	$http.jsonp('https://api.behance.net/v2/users/rbazzle/projects?client_id=EpVfyGxdjSx8FBz9wndNcqEVPRwGVPSf' + '&callback=JSON_CALLBACK')


	.success(function(data) {
		$scope.works=[];
		console.log(data)
		for (var i = data.projects.length - 1; i >= 0; i--) {
			$scope.works.push(data.projects[i].covers.original)
		}})

	.error(function(data) { console.log('error') });


	$scope.slide=1;

	$scope.increment = function(){

		if ($scope.slide == $scope.works.length - 2) {
			$scope.slide = 1;
		}
		else {
			$scope.slide ++;
		}
	}

	$scope.decrement = function(){
		if ($scope.slide == 1) {
			$scope.slide = $scope.works.length - 2;
		}
		else {
			$scope.slide --;
		}
	}


}]);