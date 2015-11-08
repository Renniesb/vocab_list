vocabApp.controller('resultsController', ['$scope','$resource', 'wordService', function  ($scope, $resource, wordService) {
	$scope.word = wordService.word;

	$scope.dictionaryAPI = $resource("https://glosbe.com/gapi_v0_1/translate?from=es&dest=es&format=json&phrase=hola&tm=true&pretty=true");
	$scope.dictionaryResults = $scope.dictionaryAPI.get();

}]);