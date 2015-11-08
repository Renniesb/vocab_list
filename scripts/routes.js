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