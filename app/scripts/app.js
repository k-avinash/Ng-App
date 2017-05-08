'use strict';
// Declare module
angular.module('internView', []);

var webApp = angular.module('webApp', [
	'ngRoute', 'ngTouch', 'ngMessages', 'ngAnimate', 'ngAria'
])

	.config([
		'$routeProvider',
		function($routeProvider) {

			$routeProvider
				.when('/newsignup', {
					controller : 'NewSignupController',
					templateUrl : 'app/modules/new_signup.html',
				})
				// Static pages section end
				.otherwise({
					redirectTo : '/newsignup'
				});
		}
	]).run([ '$rootScope',
	'$location',
	function($rootScope, $location) {

		$rootScope.urlBase = $location.protocol() + "://" + $location.host() + ":8080/";
	}
]);