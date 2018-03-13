'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('welcomeCtrl', ['$scope','$http', function($scope,$http) {
    var baseURL = "https://sampleproduct1-ws.cfapps.io";
    var welcomeURL = baseURL+'/api/welcome';
    $scope.welcomeText="";
    $scope.init = function(){
         $http({method : "GET",url : welcomeURL}).then(function(response) {
            $scope.welcomeText = response.data;
            $scope.welcomeText  = $scope.welcomeText + "-updated";
         }, function myError(response) {

         });
    };
  }])

