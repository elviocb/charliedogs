'use strict';

(function(angular){

  var AppConfig = function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
      .state('root', {
        url: '/',
        views: {
          'dogpanel': {
              templateUrl: 'app/dogpanel/dog-panel.html',
              controller: 'DogPanelCtrl'
          }
        },
        controller: AppCtrl
      });

    $urlRouterProvider.otherwise('/');
  };

  var AppCtrl = function($scope, $rootScope) {
    $rootScope.test= 10;
    $scope.itens = 0;
    console.log($rootScope);
  };

  angular
    .module('app', [
      'ui.router',
      'app.dog-panel',
      'app.nav-bar',
      'app.shopping-cart',
      'app.common'
  ])
    .config(AppConfig)
    .controller('AppCtrl', AppCtrl);

})(angular);

