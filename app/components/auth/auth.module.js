angular
    .module('so.auth', [
        'ui.router'
    ])
    .config(function($stateProvider) {
        $stateProvider
            .state('soAuth', {
                url: '/auth/',
                templateUrl: 'components/auth/auth.html'
            });
    });

