// Dictionary Results DIRECTIVE
vocabApp.directive("dictionaryExamples", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/dictionaryExamples.html',
       replace: true,
       scope: {
           example: "="
       }
   }
});