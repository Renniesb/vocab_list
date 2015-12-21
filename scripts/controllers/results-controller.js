vocabApp.controller('resultsController', ['$scope','$resource', 'wordService', 'listService', '$location','$sce', function  ($scope, $resource, wordService, listService, $location, $sce) {
	$scope.word = wordService.word;
    $scope.vocabList = listService.terms;
    $scope.meanings=[];
    $scope.examples=[];
    $scope.listDefs =[];
    $scope.listEx = [];




    $scope.addContent = function (){

        $scope.vocabList.push({
            word: $scope.word,
            defs: $scope.listDefs,
            examples: $scope.listEx
        });

        $scope.listDefs =[];
        $scope.listEx = [];

        $location.path("/list");

    }



    $scope.getDef = function (def){

            if ($scope.listDefs.indexOf(def) ===-1) {
                $scope.listDefs.push(def);
                $(event.currentTarget).removeClass('btn-primary');
                $(event.currentTarget).addClass('btn-warning');
            }else {
                $(event.currentTarget).removeClass('btn-warning');
                $(event.currentTarget).addClass('btn-primary');
                $scope.listDefs.splice(def, 1);
            };
          


    }

    $scope.getExample = function (ex){
       
        if ($scope.listEx.indexOf(ex)===-1) {
                $scope.listEx.push(ex);
                $(event.currentTarget).removeClass('btn-primary');
                $(event.currentTarget).addClass('btn-warning');
            }else {
                $(event.currentTarget).removeClass('btn-warning');
                $(event.currentTarget).addClass('btn-primary');
                $scope.listEx.splice(ex, 1);
            };        
        
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
