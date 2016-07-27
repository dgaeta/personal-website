angular
    .module('so.private', ['ui.router', 'AuthService'])
    .config(function($stateProvider) {
        $stateProvider
            .state('soPrivate', {
                url: '/private/',
                controller: 'SoPrivateController',
                templateUrl: 'components/private/private.html',
            });
    })

    .controller('SoPrivateController', ['currentAuth', function(currentAuth) {
        console.log(currentAuth);
    }]);

    
    
