var app = angular.module('myApp')
.controller('dashboardController',function($scope,  $http){

  var getLayoutList = function() {

console.log('1234');
              var layoutApiURI = 'http://demoserver.knobay.com';

              var customHeader = { headers : {'apikey': 'c65717350d5d47f7811bdf2f1e6de980'}};

              $http.get(layoutApiURI,customHeader)
                  .then(function(response) {
                      console.log(response);
                  }, function(errorResp) {
                      reject(errorResp);
                  });

      };

      getLayoutList();
});
