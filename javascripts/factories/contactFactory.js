"use strict";


app.factory("ContactFactory",function($q, $http, FIREBASE_CONFIG){
	var getContactList = function(userId){
		return $q((resolve,reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userId}"`)
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
				email: newContact.email,
				uid: newItem.uid
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
	      $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`)
		      .success(function(deleteResponse){
		        resolve(deleteResponse);
		      })
		      .error(function(deleteError){
		        reject(deleteError);
		      });
	    });
	};

	var getSingleContact = function(contactId){
	    return $q((resolve, reject) => {
	      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`)
		      .success(function(getSingleResponse){
		        resolve(getSingleResponse);
		      })
		      .error(function(getSingleError){
		        reject(getSingleError);
		    });
	    });
  	};

  	var editContact = function(editContact){
	    return $q((resolve, reject) =>{
	      $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${editContact.id}.json`,
	         JSON.stringify({
	           name: editContact.name,
	            phone: editContact.phone,
	            email: editContact.email,
	            uid: newItem.uid
	         })
	       )
	        .success(function(editResponse){
	          resolve(editResponse);
	        })
	        .error(function(editError){
	          reject(editError);
	        });
	    });
  	};





	return {getContactList:getContactList, postNewContact:postNewContact, getSingleContact:getSingleContact, editContact:editContact};
});