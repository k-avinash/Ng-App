webApp
	.config(function($httpProvider) {
		delete $httpProvider.defaults.headers.common["X-Requested-With"];
	})
	.factory(
		'UrlDataFactoryService', [
			'$http',
			'$rootScope',
			function($http, $rootScope) {

				var dataFactory = {};

				dataFactory.getHeaders = function() {
					return {
						headers : {
							"Content-type" : "application/json",
							"Accept" : "application/json"
						}
					};
				};

				// ---------- Common method to update $cacheFactory ---------
				dataFactory.saveNewSignupUser = function(data) {
					return $http.post($rootScope.urlBase + 'user/public/signup', data, dataFactory.getHeaders())
				}

				dataFactory.getAllOrganization = function() {
					return $http.get($rootScope.urlBase + 'user', dataFactory.getHeaders())
				}
				return dataFactory;
			}
		]);