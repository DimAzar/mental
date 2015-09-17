var mentalApp = angular.module('mentalApp', ['ngRoute', 'ui.bootstrap', 'pascalprecht.translate', 'ngAnimate']);

//MODULE CONFIGURATION
mentalApp.config(function ($routeProvider) {
	$routeProvider
		.when('/',
			{
			controller: 'HomeController',
			templateUrl: 'views/home'
			})
		.when('/company',
			{
			controller: 'CompanyController',
			templateUrl: 'views/company'
			})
		.when('/comm',
			{
			controller: 'CommController',
			templateUrl: 'views/communication'
			})
		.when('/articles',
			{
			controller: 'ArticlesController',
			templateUrl: 'views/articles'
			})
		.when('/testimonials',
			{
			controller: 'CustomersController',
			templateUrl: 'views/customers'
			})
		.when('/services',
			{
			controller: 'ServicesController',
			templateUrl: 'views/services'
			})
		.otherwise(	{redirectTo: '/'});
});
//ANGULAR-TRANSLATE - TRANSLATION (i18n) TABLES
mentalApp.config(function ($translateProvider) {
	  //ENGLISH TRANSLATIONs
	  $translateProvider.translations('gr', {
		  SITE_HEADING : 'Mέντaλ Α.Ε',
		  SITE_SUBHEADER : 'Ολοκληρωμένες Συμβουλευτικές Υπηρεσίες',
		  LANDING_MORE : 'Περισσότερα',

		  NAV_COMPANY : 'Εταιρεία',
		  NAV_SERVICES : 'Υπηρεσίες',
		  NAV_TESTIMONIALS : 'Οι πελάτες μας',
		  NAV_ARTICLES : 'Αρθρα',
		  NAV_COMM : 'Επικοινωνία',
		  
		  HEADER_COMPANY : 'Η Εταιρεία μας',
		  HEADER_SERVICES : 'Οι Υπηρεσίες μας',
		  HEADER_TESTIMONIALS : 'Οι πελάτες μας',
		  HEADER_ARTICLES : 'Αρθρογραφία',
		  HEADER_COMM : 'Επικοινωνήστε μαζί μας',

	  });

	  //ENGLISH TRANSLATIONs
	  $translateProvider.translations('en', {
		  SITE_HEADING : 'Mental S.A',
		  SITE_SUBHEADER : 'Complete Accounting Solutions',
		  LANDING_MORE : 'More',
		  
		  NAV_COMPANY : 'Company',
		  NAV_SERVICES : 'Services',
		  NAV_TESTIMONIALS : 'Our Customers',
		  NAV_ARTICLES : 'Articles',
		  NAV_COMM : 'Communication',

		  HEADER_COMPANY : 'Our Company',
		  HEADER_SERVICES : 'Our Services',
		  HEADER_TESTIMONIALS : 'Our Customers',
		  HEADER_ARTICLES : 'Articles',
		  HEADER_COMM : 'Contact Us',
	  });

	  //FRENCH TRANSLATIONs
	  $translateProvider.translations('fr', {
		  SITE_HEADING : 'Mental S.A',
		  SITE_SUBHEADER : 'Solutions Complètes de Comptabilité',
		  LANDING_MORE : 'Plus',
		  
		  NAV_COMPANY : 'Entreprise',
		  NAV_SERVICES : 'Services',
		  NAV_TESTIMONIALS : 'Nos clients',
		  NAV_ARTICLES : 'Articles',
		  NAV_COMM : 'Communication',

		  HEADER_COMPANY : 'Notre Entreprise',
		  HEADER_SERVICES : 'Nos Services',
		  HEADER_TESTIMONIALS : 'Nos clients',
		  HEADER_ARTICLES : 'Articles',
		  HEADER_COMM : 'Communication',
	  });
	  
	  //GERMAN TRANSLATIONs
	  $translateProvider.translations('de', {
		  SITE_HEADING : 'Mental S.A',
		  SITE_SUBHEADER : 'Komplette Lösungen für das Rechnungswesen',
		  LANDING_MORE : 'Mehr',
		  
		  NAV_COMPANY : 'Firma',
		  NAV_SERVICES : 'Dienstleistungen',
		  NAV_TESTIMONIALS : 'Unsere Kunden',
		  NAV_ARTICLES : 'Gegenstände',
		  NAV_COMM : 'Kommunikation',

		  HEADER_COMPANY : 'Firma',
		  HEADER_SERVICES : 'Dienstleistungen',
		  HEADER_TESTIMONIALS : 'Unsere Kunden',
		  HEADER_ARTICLES : 'Gegenstände',
		  HEADER_COMM : 'Kommunikation',
	  });
	  
	  //DEFAULT LANGUAGE
	  $translateProvider.preferredLanguage('gr');
});
