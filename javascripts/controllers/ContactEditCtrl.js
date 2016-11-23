"use strict";

app.controller("ContactEditCtrl", function($scope, $location, $routeParams, ContactFactory){
	$scope.newContact = {};
	let contactId = $routeParams.id;
	console.log("$routeParams", contactId);

	ContactFactory.getSingleContact(contactId).then(function(oneContact){
		oneContact.id = contactId;
		$scope.newContact = oneContact;
	});

	$scope.addNewContact = function(){
		ContactFactory.editContact($scope.newContact).then(function(response){
			$scope.newContact = {};
			$location.url("/contacts/list");
		});
	};
});