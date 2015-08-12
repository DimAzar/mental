var getMentalContext = function(){
	return '/'+jQuery('body').data('context');
};

//FACTORIES/SERVICES
mentalApp.factory('DownloadService', ['$window', function($window) {
   return {
        downloadReport: function(objectID) {
    		var url = '/Mental/rest/download/'+objectID;
    		$window.location.href = url;
        }
   };
}]);
