// Dictionary definitions DIRECTIVE

//TODO: change name of this file to definitions.js
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