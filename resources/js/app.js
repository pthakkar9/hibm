(function() {
    var app = angular.module('hibm', ['ngRoute']);
    app.controller('HomeController', function() {
        this.message = "This is home page!";
    });
    app.controller('404Controller', ['',
        function() {}
    ]);
    app.config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'resources/partials/home.html',
            controller: 'HomeController'
        }).otherwise({
            templateUrl: 'resources/partials/404.html',
            controller: '404Controller'
        });
    });
})();