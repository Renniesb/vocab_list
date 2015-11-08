vocabApp.controller('homeController', ['$scope', 'wordService', function ($scope, wordService) {
		$scope.word = wordService.word;
		$scope.$watch('word', function  () {
			wordService.word = $scope.word;
		} );
}]);