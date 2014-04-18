function mainCtrl($scope, $http){
    $scope.products = [];

    $http.get("data/products.json").success(
        function(data){
            $scope.products = data;
        }
    );
}