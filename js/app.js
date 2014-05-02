var app = angular.module('facebookScrape', []);


app.controller('ScrapeCtr', ['$scope', '$http', function($scope, $http){

  var url = 'http://www.cyberagent.co.jp/';

  $http.post('https://graph.facebook.com/?scrape=true&id=' + url, {})
    .success(function(scrape) {
      $scope.scrape = scrape;
    })
    .error(function() {
      alert('error');
    });


}]);