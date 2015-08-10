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

  var AppCtrl = function($scope) {
  };

  angular
    .module('app', [
      'ui.router',
      'app.dog-panel',
      'app.nav-bar'
  ])
    .config(AppConfig)
    .controller('AppCtrl', AppCtrl);

})(angular);

