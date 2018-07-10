app.controller("userCtrl",function ($http,$state,serviceHTTP) {
    var vm = this;
    serviceHTTP.userListHTTP().then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response.data);
        if(response.data.message === "success") {
            vm.userList = response.data.data.accountList;
            console.log(vm.userList);
        }
        else {

        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });
});