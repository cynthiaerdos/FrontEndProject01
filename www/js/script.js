function mainCtrl($scope, $http) {
    $scope.products = [];




    if (localStorage.getItem("selectedProducts") === null) {
        $scope.selectedProducts = [];
    } else {
    $scope.selectedProducts = JSON.parse(localStorage.getItem("selectedProducts"));
}

    $scope.selectProduct = function (product){

            var IsItTrueOrFalse = false;
        for(var i=0;i<$scope.selectedProducts.length;i++) {
            if($scope.selectedProducts[i].id === product.id){
                $scope.selectedProducts[i].quantity++;
                IsItTrueOrFalse = true;
            }
        }
        if(IsItTrueOrFalse === false){
            product.quantity=1;
            $scope.selectedProducts.push(product);
        }
        localStorage.setItem("selectedProducts", JSON.stringify($scope.selectedProducts));
    };

    $scope.calculateNumberOfSelectedItems = function(){
        var selectedItemsNum = 0;
        for(var a=0;a<$scope.selectedProducts.length;a++) {
            selectedItemsNum = selectedItemsNum + $scope.selectedProducts[a].quantity;
        }
            return selectedItemsNum;
    };

    $scope.deleteProduct = function(product){
        if(product.quantity===1){
           for(var i=0;0<$scope.selectedProducts.length;i++){
               if($scope.selectedProducts[i].id === product.id){
                   $scope.selectedProducts.splice(i,1);
                   localStorage.setItem("selectedProducts", JSON.stringify($scope.selectedProducts));

               }
           }
        }else{
            for(var i=0;0<$scope.selectedProducts.length;i++){
                if($scope.selectedProducts[i].id === product.id){
                    product.quantity--;
                    localStorage.setItem("selectedProducts", JSON.stringify($scope.selectedProducts));
                }
            }
        }

    };


    $http({method: 'GET', url: 'data/products.json'}).
        success(function(data, status, headers, config) {
            $scope.products = data;
        }).
        error(function(data, status, headers, config) {
            alert("Error during loading the data file!");
        });


}