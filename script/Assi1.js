(function(){
    angular.module("assi1",[]).controller("assi2",function($scope){
        $scope.dish="";
        $scope.nice="";

        $scope.fun1 = function(){
            var str=$scope.dish;
            var str1=str.split(",");
            if($scope.dish==""){
                $scope.nice="Empty";
            }
            else if(str1.length==1){
                $scope.nice="Enjoy";
            }
            else{
                $scope.nice="Too much";
            }
        }
    });
})();