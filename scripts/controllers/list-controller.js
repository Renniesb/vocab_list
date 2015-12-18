vocabApp.controller('listController', ['$scope','listService', '$location','$sce', function  ($scope, listService, $location, $sce) {

		$scope.vocabList = listService.terms;

}]);