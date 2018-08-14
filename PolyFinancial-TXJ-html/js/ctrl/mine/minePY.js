app.controller("minePYCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

    // // 验证是否登录，否则转跳到登陆页面
    // vm.loginOrNot = (sessionStorage.getItem("login") == "true")? 1:0;
    // if(vm.loginOrNot === 0){
    //     $state.go('login');
    //     return false;
    // }

    serviceHTTP.tradeListHTTP().then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.message === "查询成功") {
            vm.list = response.data.data;
            console.log(vm.list)

        }
        else if(response.data.code !==  0) {
            bootbox.alert(response.data.message);

        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });
});