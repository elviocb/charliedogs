'use strict';

(function (angular) {

  var DogPanelCtrl = function($scope){
    
  };

  // ---------------------------------------------------------
  // Entry Point
  // ---------------------------------------------------------

  angular.module('app.dog-panel', [
    'ui.router',
  ])
  .controller('DogPanelCtrl', DogPanelCtrl);

})(angular);