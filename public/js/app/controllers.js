mentalApp.controller('I18NController', ['$scope', '$rootScope', '$translate', function($scope, $rootScope, $translate) {
	 $scope.changeLanguage = function (key) {
	    $translate.use(key);
	 };
}]);
mentalApp.controller('NewsController',[ '$scope', '$window', '$rootScope', function($scope, $window, $rootScope) {
}]);

mentalApp.controller('MentalController',[ '$scope', '$window', '$rootScope', 'CustomersList', 'CompanySkillsList', 'ArticlesList', function($scope, $window, $rootScope, CustomersList, CompanySkillsList, ArticlesList) {
	$scope.customers = CustomersList;
	$scope.skills	 = CompanySkillsList;
	$scope.articles	 = ArticlesList;
	
	$scope.inverted = 'timeline-inverted';
	
	$scope.skillsimage1 = 'fa-sun-o';
	$scope.skillsimage2 = 'fa-pie-chart';
	$scope.skillsimage3 = 'fa-archive';
	$scope.skillsimage4 = 'fa-calendar';
}]);
