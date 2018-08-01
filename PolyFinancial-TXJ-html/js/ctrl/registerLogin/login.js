app.controller("loginCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

    // 调试用
    $timeout(function(){
        $(".indexLoading").hide(500);
    },0);

    vm.login = function(){
        var info = {
            phoneNum: vm.userName,
            pwd: vm.passWord
        };
        serviceHTTP.loginHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {
                sessionStorage.setItem("login","true");
            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };
});