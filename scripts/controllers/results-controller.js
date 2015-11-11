vocabApp.controller('resultsController', ['$scope','$resource', 'wordService', function  ($scope, $resource, wordService) {
	$scope.word = wordService.word;

	$scope.dictionaryAPI = $resource("https://glosbe.com/gapi/translate?from=es&dest=es&format=json&phrase="+ $scope.word.toLowerCase()+"&tm=true&pretty=true", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
	$scope.dictionaryResults = $scope.dictionaryAPI.get().$promise.then(function(data){

            	var word;

            	for (i = 0; i < data.tuc.length; i++) {
            		if(data.tuc[i].meanings)
    				{word = data.tuc[i]}

				}

                console.log(word.meanings);
            });

}]);
