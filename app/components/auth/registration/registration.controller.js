angular
    .module('so.auth.registration')
    .controller('SoAuthRegistrationController', SoAuthRegistrationController);

function SoAuthRegistrationController($scope) {

    $scope.email = '';
    $scope.password = '';
    $scope.name = '';
    $scope.branch = '';

    $scope.err = null;
    $scope.errObject = null;

    $scope.succes = '';



}