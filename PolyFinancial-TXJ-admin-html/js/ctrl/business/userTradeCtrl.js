app.controller("userTradeCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams) {
    var vm = this;
    let id = $stateParams.id;
    serviceHTTP.userTradeHTTP(id).then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.message === "success") {
            vm.list = response.data.data.accountList[0];
            console.log(vm.list);
        }
        else {

        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });
});