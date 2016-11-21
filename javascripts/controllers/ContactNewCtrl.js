"use strict";

app.controller("ContactNewCtrl", function($scope, $location, ContactFactory){
	$scope.newContact = {};

	$scope.addNewContact = function(){
		ContactFactory.postNewContact($scope.newContact).then(function(contactId){
			$location.url("/contacts/list");
			$scope.newContact = {};
		});
	};
});