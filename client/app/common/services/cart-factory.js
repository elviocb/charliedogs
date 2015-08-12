'use strict';
(function (angular) {

  var CartFactory = function ($rootScope) {
    return {
      addCart: function(){
        $rootScope.shoppingCart++;
      }
    };
  };

angular

  .module('app.common', ['app.common'])

  .factory('CartFactory', CartFactory);

})(angular);