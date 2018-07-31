app.controller("registerCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

    // 调试用
    $timeout(function(){
        $(".indexLoading").hide(500);
    },0);

    vm.confirm = function(){
        var phone = {
            phoneNum :vm.userName,
            verifyCode:vm.code,
        };

        if(vm.newP !== vm.oldP){
            bootbox.alert("两次密码不一致哦请重新输入");
            vm.newP = vm.oldP = undefined;
            return false;
        }
        var info = {
            phoneNum: vm.userName,
            pwd:vm.newP
        };
        // serviceHTTP.codeConfirmHTTP(phone).then(function successCallback(response) {
        //     // 请求成功执行代码
        //     console.log(response);
        //     if(response.data.message === "success") {
        //         sessionStorage.setItem("login","true");
        //     }
        //     else {
        //
        //     }
        // }, function errorCallback(res) {
        //     // 请求失败执行代码
        // });

        serviceHTTP.registerHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {

            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    }
});