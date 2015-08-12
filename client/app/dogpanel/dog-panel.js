'use strict';

(function (angular) {

  var DogPanelCtrl = function($scope, FeedFactory){

    // Fetch list of dogs from the server
    FeedFactory
      .getDogs()
      .then(function(resp){
        $scope.dogs = resp.data;
      });

  };

  // ---------------------------------------------------------
  // Entry Point
  // ---------------------------------------------------------

  angular.module('app.dog-panel', [
    'ui.router',
    'ui.bootstrap',
    'app.common'
  ])
  .controller('DogPanelCtrl', DogPanelCtrl);

})(angular);