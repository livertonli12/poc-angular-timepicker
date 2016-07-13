(function() {
    'use strict';

    angular.module('treinamento', ['ngAnimate', 'ui.bootstrap']);
    angular.module('treinamento').controller('MainController', MainController);

    function MainController($scope, $log) {
        $scope.mytime = new Date();

        $scope.hstep = 1;
        $scope.mstep = 1;

        
    }
    MainController.$inject = ["$scope", "$log"]
})();
