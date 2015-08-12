'use strict';

(function (angular) {

  var ShoppingCartCtrl = function($scope, $rootScope){

    // Control the shopping cart
    $rootScope.shoppingCart = 0;
    console.log('rootScope from cart model!!',$rootScope)

  };

  // ---------------------------------------------------------
  // Entry Point
  // ---------------------------------------------------------

  angular.module('app.shopping-cart', [])
  .controller('ShoppingCartCtrl', ShoppingCartCtrl);

})(angular);