Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}


app.service('whatIsIt', ['$http',
	function($http) {
		var fruitList = [];
		var veggieList = [];

		$http.get('json/foods.json').success(function(data) {
			var lists = JSON.parse(data);
			fruitList = lists['fruit'];
			veggieList = lists['vegetable'];
		});

		function findOut(search) {
			if fruitList.contains(search) {
				return 'fruit';
			} else if  veggieList.contains(search) {
				return 'vegetable';
			} else {
				return 'N/A';
			}
		}

		return { findOut: findOut; }
	}]);
