// Dictionary Results DIRECTIVE
vocabApp.directive("dictionaryResults", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/dictionaryResults.html',
       replace: true,
       scope: {
           definition: "="
           // example: "@"
       }
   }
});