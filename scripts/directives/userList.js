// user word list DIRECTIVE

vocabApp.directive("userList", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/vocabList.html',
       replace: true,
       scope: {
           definition: "=",
           example: "@",

       }
   }
});