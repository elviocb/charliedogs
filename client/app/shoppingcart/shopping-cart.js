'use strict';

(function (angular) {

  var ShoppingCartCtrl = function($scope){

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

  angular.module('app.shopping-cart', [
    'ui.router',
    'ui.bootstrap'
  ])
  .controller('ShoppingCartCtrl', ShoppingCartCtrl);

})(angular);