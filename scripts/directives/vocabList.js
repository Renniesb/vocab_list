// user word list DIRECTIVE

vocabApp.directive("vocabList", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/vocabList.html',
       replace: true,
       scope: {
           term: "=",
           defs: "=",
           examples: "="

       }
   }
});