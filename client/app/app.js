'use strict';

(function(angular){

  var AppConfig = function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
      .state('root', {
        url: '/',
        views: {
          'dogpanel': {
              templateUrl: 'dogpanel/dog-panel.tpl.html',
              controller: 'DogPanelCtrl'
          }
        },
        controller: AppController
      });

    $urlRouterProvider.otherwise('/');
  };

  var AppCtrl = function($scope) {
    
  };

  angular.module('App', [
    'ui.router'
  ])
    .config(AppConfig)
    .controller('AppCtrl', AppCtrl);

})(angular);

