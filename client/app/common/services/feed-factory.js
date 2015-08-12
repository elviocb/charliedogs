'use strict';
(function (angular, _) {

  var FeedFactory = function ($http, $location, $window) {
    var workout;
    var getDogs = function () {
      return $http({
        method: 'GET',
        url: '/dogs',
        data: {} // {'ORDERING_CRITERIA_KEY': 'ORDERING_CRITERIA_VALUE'} optional
      })
      .then(function (resp) {
        return resp.data; //sends back data to controller
      });
    };

    return {
      getDogs: getDogs
    };
  };

angular

  .module('app.common', ['app.common'])

  .factory('FeedFactory', FeedFactory);

})(angular);