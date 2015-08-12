var mentalApp = angular.module('mentalApp', ['ngRoute', 'ui.bootstrap', 'pascalprecht.translate']);

//ANGULAR-TRANSLATE - TRANSLATION (i18n) TABLES
mentalApp.config(function ($translateProvider) {
	  //ENGLISH TRANSLATIONs
	  $translateProvider.translations('en', {
		  SITE_HEADER : 'EXPORT CREDIT DATABASE',
	  });

	  //FRENCH TRANSLATIONs
	  $translateProvider.translations('fr', {
		  SITE_HEADER : 'EXPORT CREDIT DATABASE',
	  });
	  
	  //GERMAN TRANSLATIONs
	  $translateProvider.translations('de', {
		  SITE_HEADER : 'EXPORT CREDIT DATABASE',
	  });
	  
	  //DEFAULT LANGUAGE
	  $translateProvider.preferredLanguage('en');
});
