// ROUTES
vocabApp.config(function ($stateProvider) {

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/home.html",
            controller: "scripts/controllers/home.js"
        });
});