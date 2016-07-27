// app.js

var so = angular.module('so', [
    'ui.router',
    'ui.bootstrap',
    'so.home',
    'so.auth',
    'so.life',
    'so.about',
    'so.cool',
    'so.projects',
    'so.videos',
    'so.contact'
]);

so.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
});

so.controller("soCtrl", ["$scope",
	function($scope) {
	

	}
]);

so.run(function($rootScope, $state) {

    $rootScope.$on('$routeChange', function(event, next, previous) {
        console.log('Route Change');
    });

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        if (error === 'AUTH_REQUIRED') {
            $state.go('soAuthLogin');
        }
    });
});