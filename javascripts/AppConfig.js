"use strict";

app.run(function(FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
	$routeProvider
		.when('/auth', {
			templateUrl: 'partials/auth.html',
			controller:'AuthCtrl'
		})
		.when('/contacts/list', {
			templateUrl: 'partials/contact-list.html',
			controller: 'ContactListCtrl'
		})
		.when('/contacts/new', {
			templateUrl: 'partials/contact-new.html',
			controller: 'ContactNewCtrl'
		})
		.when('/contacts/edit/:id', {
			templateUrl: 'partials/contact-new.html',
			controller: 'ContactEditCtrl'
		})
		.otherwise('/contacts/list');
})