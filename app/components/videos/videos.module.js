angular
    .module('so.videos', [
        'ui.router',
    ])
    .config(function($stateProvider) {
        $stateProvider
            .state('soVideos', {
                url: '/videos',
                templateUrl: 'components/videos/videos.html'
            });
    });

