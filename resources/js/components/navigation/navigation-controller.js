app.controller('navigation', ['$scope', function($scope){
    $scope.toggle = false;
}]);

app.filter('trustHtml',['$sce', function($sce){
    return function(html){
      return $sce.trustAsHtml(html)
    }
}]);
