vocabApp.controller('resultsController', ['$scope','$resource', 'wordService','$sce', function  ($scope, $resource, wordService,$sce) {
	$scope.word = wordService.word;
    $scope.meanings=[];
    $scope.examples=[];
    $scope.listDefs = [];

    $scope.addContent = function (){

        $location.path("/results");

    }

    $scope.getDef = function (){
            var selectDef = $(event.currentTarget).parent().prev().find("span").html();
            if ($scope.listDefs.indexOf(selectDef)===-1) {
                $scope.listDefs.push(selectDef);
            };

           console.log($scope.listDefs);


    }

	$scope.dictionaryAPI = $resource("https://glosbe.com/gapi/translate?from=es&dest=es&format=json&phrase="+ $scope.word.toLowerCase()+"&tm=true&pretty=true", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
	$scope.dictionaryResults = $scope.dictionaryAPI.get().$promise.then(function(data){

            	var word;

            	for (i = 0; i < data.tuc.length; i++) {
            		if(data.tuc[i].meanings)
    				{word = data.tuc[i]}

				}

                for (var i = 0; i < data.examples.length; i++) {
                    $scope.examples[i] = $sce.trustAsHtml(data.examples[i].first);
                };


                for (var i = 0; i < word.meanings.length; i++) {
                    $scope.meanings[i] = $sce.trustAsHtml(word.meanings[i].text);
                };
    });


}]);
