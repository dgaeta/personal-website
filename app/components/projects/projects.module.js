angular
    .module('so.projects', [
        'ui.router',
    ])
    .config(function($stateProvider) {
        $stateProvider
            .state('soProjects', {
                url: '/projects',
                templateUrl: 'components/projects/projects.html'
            });
    });

