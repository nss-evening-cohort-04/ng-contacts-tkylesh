"use strict";

app.controller("ContactController",function($scope, ContactFactory){
	$scope.showListView = true;
	$scope.newContact = {};
	$scope.contacts= [];


	let getContacts = function(){
		ContactFactory.getContactList().then(function(fbContacts){
			$scope.contacts = fbContacts;
			console.log("$scope.contacts", $scope.contacts);
		});
	};

	getContacts();

	$scope.allContacts = function(){
		console.log("you click all contacts");
		$scope.showListView = true;
	};

	$scope.newItem = function(){
		console.log("you clicked new item");
		$scope.showListView = false;
	};

	$scope.addNewContact = function(){
		ContactFactory.postNewContact($scope.newContact).then(function(contactId){
			getContacts();
			$scope.newContact = {};
			$scope.showListView = true;
		});
	};

});