app.controller('fruitOrNotController', ['$scope', '$http',
	function($scope, $http) {
		$http.defaults.transformResponse = [];

		$http.get('json/foods.json').success(function(data) {
			$scope.fruitList = data['fruit'];
			$scope.vegetableList = data['vegetable'];
		});

		$scope.queryIsEmpty = function() {
			return (!$scope.query || !$scope.query.trim);
		}

	}]);