vocabApp.controller('homeController', ['$scope', 'wordService', '$location','$sce', function ($scope, wordService, $location, $sce) {
		$scope.word = wordService.word;
		// $(".wordsearch").addClass(".active");
		$scope.$watch('word', function  () {
			wordService.word = $scope.word;
		} );

		$scope.myImgSrc = $sce.trustAsResourceUrl('Images/bandera.jpg');

		$scope.submit = function () {
			$location.path("/results");
		}
}]);