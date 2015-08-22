angular
    .module('so.contact', [
        'ui.router',
    ])
    .config(function($stateProvider) {
        $stateProvider
            .state('soContact', {
                url: '/contact',
                templateUrl: 'components/contact/contact.html'
            });
    });

