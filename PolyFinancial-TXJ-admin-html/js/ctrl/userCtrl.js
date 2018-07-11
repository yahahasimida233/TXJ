app.controller("userCtrl",function ($scope,$http,$state,serviceHTTP) {
    var vm = this;

    serviceHTTP.userListHTTP().then(function successCallback(response) {
        // 请求成功执行代码
        if(response.data.message === "success") {
            vm.list = response.data.data.accountList;
            console.log(vm.list);
        }
        else {

        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });
});