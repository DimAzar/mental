mentalApp.controller('I18NController', ['$scope', '$rootScope', '$translate', function($scope, $rootScope, $translate) {
	 $scope.changeLanguage = function (key) {
	    $translate.use(key);
	 };
}]);

mentalApp.controller('MentalController',[ '$scope', '$window', '$rootScope', 'DownloadService', function($scope, $window, $rootScope, downloadService) {
	$scope.connected = false;
	$rootScope.bgimg = "resources/img/lightWAIT.png";
	$rootScope.ulyssesmsg = '';
	
	$scope.principal = 'unknown';

	$scope.downloadReportFile = function (objectID) {
		downloadService.downloadReport(objectID);
	};

}]);
