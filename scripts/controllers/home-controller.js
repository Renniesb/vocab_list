vocabApp.controller('homeController', ['$scope', 'wordService', '$location', function ($scope, wordService, $location) {
		$scope.word = wordService.word;
		$scope.$watch('word', function  () {
			wordService.word = $scope.word;
		} );

		$scope.submit = function () {
			$location.path("/results");
		}
}]);