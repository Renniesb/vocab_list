vocabApp.config(function  ($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeController'
	})
	.when('/results', {
		templateUrl: 'views/results.html',
		controller: 'resultsController'
	})
});

// ROUTES
// vocabApp.config(function ($stateProvider) {

//     $stateProvider
//         .state('home', {
//             url: "/home",
//             templateUrl: "views/home.html",
//             controller: "scripts/controllers/home.js"
//         });
// >>>>>>> baeabceeeb63f4607db8c84c4a362d39e9a379b5
// });