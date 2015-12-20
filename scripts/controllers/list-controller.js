vocabApp.controller('listController', ['$scope','listService', '$location','$sce', function  ($scope, listService, $location, $sce) {

		$scope.vocabList = listService.terms;

		(function () {
			if ($scope.vocabList.length === 0) {
						alert("You haven't added any words to your vocab list yet. Add words to see them in your Vocab List");
					};
		})();
		

		$scope.removeWord = function(term) {
			$scope.vocabList.splice(term, 1);
		}

}]);