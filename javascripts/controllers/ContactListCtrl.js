"use strict";

app.controller("ContactListCtrl", function($scope, $rootScope, ContactFactory){
	$scope.contacts = {};

	let getContacts = function(){
		ContactFactory.getContactList($rootScope.user.uid).then(function(fbContacts){
			$scope.contacts = fbContacts;
			console.log("$scope.contacts", $scope.contacts);
		});
	};

	getContacts();

	 $scope.deleteContact = function(contactId){
    ContactFactory.deleteItem(contactId).then(function(response){
      getItems();
    });
  };

});