webApp.factory(
	'TempService',
	function($rootScope, UrlDataFactoryService) {
		var service = {};

		service.getAllOrganization = function(callback) {
			UrlDataFactoryService.getAllOrganization().success(function(response) {
				callback(response);
			}).error(function(response) {
				callback(response);
			});
		};
		service.saveNewSignupUser = function(data, callback) {
			UrlDataFactoryService.saveNewSignupUser(data).success(function(response) {
				callback(response);
			}).error(function(response) {
				callback(response);
			});
		};
		return service;
	});