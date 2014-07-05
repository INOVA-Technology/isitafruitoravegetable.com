var app = angular.module('fruitOrNot', [
	'ngRoute'
]);

app.config(['$routeProvider' ,
	function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'layouts/fruit-search.html',
			controller: 'fruitOrNotController'
		});
	}]);