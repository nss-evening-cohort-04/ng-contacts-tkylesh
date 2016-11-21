"use strict";


app.factory("ContactFactory",function($q, $http, FIREBASE_CONFIG){
	var getContactList = function(){
		return $q((resolve,reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json`)
			.success(function(response){
				let contacts = [];
				Object.keys(response).forEach(function(key){
					response[key].id=key;
					contacts.push(response[key]);
				});
				resolve(contacts);
			})
			.error(function(errorResponse){
				reject(errorResponse);
			});
		});
	};

	var postNewContact = function(newContact){
		return $q((resolve,reject) =>{
			$http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify({
				name: newContact.name,
				phone: newContact.phone,
				email: newContact.email
			}))
			.success(function(postResponse){
				resolve(postResponse);
			})
			.error(function(postError){
				reject(postError);
			});
		});
	};

	var deleteContact = function(contactId){
	    return $q((resolve, reject) => {
	      $http.delete(`${FIREBASE_CONFIG.databaseURL}/contactss/${contactId}.json`)
	      .success(function(deleteResponse){
	        resolve(deleteResponse);
	      })
	      .error(function(deleteError){
	        reject(deleteError);
	      });
	    });
	};





	return {getContactList:getContactList, postNewContact:postNewContact};
});