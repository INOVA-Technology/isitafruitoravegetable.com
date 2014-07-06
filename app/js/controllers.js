app.controller('fruitOrNotController', ['$scope', '$http',
	function($scope, $http) {
		$http.defaults.transformResponse = [];

		$http.get('json/foods.json').success(function(data) {
			lists = JSON.parse(data)
			$scope.fruitList = lists['fruit'];
			$scope.vegetableList = lists['vegetable'];
			$scope.allFood = $scope.fruitList.concat($scope.vegetableList)
		});

		$scope.queryIsEmpty = function() {
			return (!$scope.query || !$scope.query.trim);
		}

	}]);