"use strict";

app.run(function(FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
	$routeProvider
		.when('/contacts/list', {
			templateUrl: 'partials/contact-list.html',
			controller: 'ContactListCtrl'
		})
		.when('/contacts/new', {
			templateUrl: 'partials/contact-new.html',
			controller: 'ContactNewCtrl'
		})
		.otherwise('/contacts/list');
})