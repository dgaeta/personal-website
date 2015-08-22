angular
    .module('so.life', [
        'ui.router',
    ])
    .config(function($stateProvider) {
        $stateProvider
            .state('soLife', {
                url: '/life',
                templateUrl: 'components/life/life.html'
            });
    });

