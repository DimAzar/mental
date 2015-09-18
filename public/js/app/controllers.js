mentalApp.controller('I18NController', ['$scope', '$translate', function($scope, $translate) {
	 $scope.changeLanguage = function (key) {
	    $translate.use(key);
	 };
}]);

mentalApp.controller('HomeController',[ '$scope', '$rootScope', function($scope, $rootScope) {
	$rootScope.showfooter = false;
	$scope.version = "(envr: DEV - version 0.5.2 - multipage)";
}]);

mentalApp.controller('CompanyController',[ '$scope' , '$rootScope', function($scope, $rootScope) {
	$rootScope.showfooter = true;
}]);

mentalApp.controller('CustomersController',[ '$scope' , '$rootScope', 'CustomersList', function($scope, $rootScope, CustomersList) {
	$rootScope.showfooter = true;
	$scope.customers = CustomersList;
}]);

mentalApp.controller('ArticlesController',[ '$scope' , '$rootScope', function($scope, $rootScope) {
	$rootScope.showfooter = true;
}]);

mentalApp.controller('CommController',[ '$scope' , '$rootScope', function($scope, $rootScope) {
	$rootScope.showfooter = true;
}]);

mentalApp.controller('ServicesController',[ '$scope' , '$rootScope', function($scope, $rootScope) {
	$rootScope.showfooter = true;
}]);
