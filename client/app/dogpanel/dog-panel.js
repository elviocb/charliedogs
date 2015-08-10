'use strict';

(function (angular) {

  var DogPanelCtrl = function($scope){

    $scope.fakeData = [
      {
       race: 'Beagle',
       age: '5 anos',
       color: 'preto',
       price: '200,00',
       thumb: 'http://lorempixel.com/200/200/animals/'
      },{
       race: 'Boxer',
       age: '4 meses',
       color: 'preto',
       price: '350,00',
       thumb: 'http://lorempixel.com/200/200/animals/'
      },{
       race: 'Bulldog',
       age: '1 ano',
       color: 'preto',
       price: '500,00',
       thumb: 'http://lorempixel.com/200/200/animals/'
      },{
       race: 'Dalmata',
       age: '2 anos',
       color: 'preto' ,
       price: '990,00',
       thumb: 'http://lorempixel.com/200/200/animals/'
      },{
       race: 'Husk Siberiano',
       age: '4 meses',
       color: 'preto' ,
       price: '150,00',
       thumb: 'http://lorempixel.com/200/200/animals/'
      },{
       race: 'Maltês',
       age: '9 meses',
       color: 'preto' ,
       price: '300,00',
       thumb: 'http://lorempixel.com/200/200/animals/'
      }
    ]
  };

  // ---------------------------------------------------------
  // Entry Point
  // ---------------------------------------------------------

  angular.module('app.dog-panel', [
    'ui.router',
  ])
  .controller('DogPanelCtrl', DogPanelCtrl);

})(angular);