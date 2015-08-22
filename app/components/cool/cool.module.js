angular
    .module('so.cool', [
        'ui.router',
    ])
    .config(function($stateProvider) {
        $stateProvider
            .state('soCool', {
                url: '/cool',
                templateUrl: 'components/cool/cool.html'
            });
    });

