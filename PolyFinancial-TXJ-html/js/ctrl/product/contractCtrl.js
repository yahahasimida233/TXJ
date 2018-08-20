app.controller("contractCtrl", function ($state, $stateParams, serviceHTTP, $timeout) {
    var vm = this;
    // 隐藏动画
    $timeout(function () {
        $(".indexLoading").hide(500);
    }, 0);

    vm.back = function(){
        window.history.back(-1);
    };

    var id = $stateParams.id;

    serviceHTTP.userContractHTTP(id).then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.code ==0) {
            vm.list = response.data.data;
            console.log(vm.list);
        }
        else {
            bootbox.alert(response.data.message)
        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });

});