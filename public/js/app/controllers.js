mentalApp.controller('MentalController',[ '$scope', '$window', '$rootScope', 'DownloadService', function($scope, $window, $rootScope, downloadService) {
	$scope.connected = false;
	$rootScope.bgimg = "resources/img/lightWAIT.png";
	$rootScope.ulyssesmsg = '';
	
	$scope.principal = 'unknown';

	$scope.downloadReportFile = function (objectID) {
		downloadService.downloadReport(objectID);
	};

}]);

mentalApp.controller('I18NController', ['$scope', '$translate', function($scope, $translate) {
	 $scope.changeLanguage = function (key) {
	    $translate.use(key);
	 };
}]);

mentalApp.controller('CustomersController',[ '$scope' , function($scope) {
}]);


mentalApp.controller('ArticlesController',[ '$scope', function($scope) {
}]);
