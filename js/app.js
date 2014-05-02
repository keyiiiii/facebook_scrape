var app = angular.module('facebookScrape', []);


app.controller('ScrapeCtr', ['$scope', '$http', function($scope, $http){

  $scope.clearBtn = function() {

    var url = $scope.url;

    $http.post('https://graph.facebook.com/?scrape=true&id=' + url, {})
      .success(function(scrape) {
        $scope.scrape = scrape;
      })
      .error(function() {
        alert('error');
      });
  };



}]);