app.controller("accountEditCtrl", function ($scope, serviceHTTP, $state, $stateParams) {
    var vm = this;
    vm.admin = JSON.parse(sessionStorage.getItem("admin"));
    $scope.admin = vm.admin;
    var arr = vm.admin;
    for (i = 0; i < arr.length; i++) {
        arr[i].ifChecked = false
    }
    console.log(arr);
    
    // angular.forEach(arr, function (data) {
    //     data.ifChecked = false
    // })
    // console.log(vm.admin);
    //单选
    vm.checkRole = function (ifChecked, index) {
        vm.admin[index].ifChecked == true ? false : true;
        // console.log(vm.admin);
    }
    //监听函数
    vm.log = function () {
        console.log(vm.admin);
    }
     // 全选
    vm.checkAll = function(ifChecked){
        //改变全选按钮的状态
        vm.ifChecked = !vm.ifChecked;
        //循环操作数据，将每条数据里面的ifChecked值跟全选状态的值对应起来
        angular.forEach(vm.admin,function(data){
            data.ifChecked = vm.ifChecked;
        });
    };

    // 全选
    // $scope.checkAll = function (ifChecked) {
    //     //改变全选按钮的状态
    //     $scope.ifChecked = !$scope.ifChecked;
    //     //循环操作数据，将每条数据里面的checked值跟全选状态的值对应起来
    //     angular.forEach($scope.admin, function (value, key) {
    //         value.ifChecked = $scope.ifChecked;
    //     });
    // };

    console.log(vm.anmin);
    console.log($scope.admin);
    
    vm.id = function (x) {
        var arr2 = [];
        for (i = 0; i < x.length; i++) {
            if (x[i].ifChecked == true) {
                arr2.push(x[i].id)
            }
        }
        console.log(arr2);
    }
})