mentalApp.controller('I18NController', ['$scope', '$rootScope', '$translate', function($scope, $rootScope, $translate) {
	 $scope.changeLanguage = function (key) {
	    $translate.use(key);
	 };
}]);
mentalApp.controller('NewsController',[ '$scope', '$window', '$rootScope', 'DownloadService', function($scope, $window, $rootScope, downloadService) {
	$scope.connected = false;
	
}]);

mentalApp.controller('MentalController',[ '$scope', '$window', '$rootScope', 'DownloadService', function($scope, $window, $rootScope, downloadService) {
	$scope.connected = false;
}]);
