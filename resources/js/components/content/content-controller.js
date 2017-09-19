app.controller('content',['$scope', '$http', function($scope, $http){
    $http.get("data.json")
    .then(function(response) {
        $scope.data = response.data;
    });
}]);

app.filter('trustHtml',['$sce', function($sce){
    return function(html){
      return $sce.trustAsHtml(html)
    }
}]);
