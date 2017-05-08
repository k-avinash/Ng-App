webApp.controller('NewSignupController', [ '$scope', '$rootScope', '$location', '$timeout', '$log', 'TempService', function($scope, $rootScope, $location, $timeout, $log, TempService) {
	$scope.organization;
	$scope.resposeError = false;
	$scope.resposeSuccess = false;
	$scope.EMAILREGEXP = /^[a-z0-9A-Z]+[a-zA-Z0-9._]*@[a-zA-Z]+(\.[a-zA-Z]+)*(\.[a-zA-Z]{2,5})$/;

	function getOrganizationsList() {
		TempService.getAllOrganization(function(response) {
			$scope.organizations = response.data;
		});
	}
	$scope.signupUser = function() {
		var user = {
			"fullName" : $scope.user.fullName,
			"email" : $scope.user.email,
			"userAccessLocation" : $rootScope.clientInfo == undefined || $rootScope.clientInfo == null ? null : $rootScope.clientInfo,
			"organization" : {
				"id" : $scope.org.id
			},
			"contactNo" : $scope.user.contactNo
		};

		TempService.saveNewSignupUser((user), function(response) {
			if (response.statusCode === "SC003") {
				$scope.resposeError = false;
				$scope.resposeSuccess = true;
				$scope.activationMessage = "User has been created";
			}
			if (response.statusCode === "SC004") {
				$scope.resposeSuccess = false;
				$scope.resposeError = true;
				$scope.errorMessage = response.data;
			}
		});
	}

	function init() {
		$scope.user = {};
		$("#ajax-loader").addClass('hide');
		$("#main-ajax-loader").addClass('hide');
		getOrganizationsList();
	}
	// ----- Initailization ----
	init();
} ]);