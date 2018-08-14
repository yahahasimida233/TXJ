app.controller("mineTradeCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

    // 验证是否登录，否则转跳到登陆页面
    // vm.loginOrNot = (sessionStorage.getItem("login") == "true")? 1:0;
    // if(vm.loginOrNot === 0){
    //     $state.go('login');
    //     return false;
    // }

    // 已投资
    vm.trade1 = function(){
        vm.nav = 0;
        serviceHTTP.payedHTTP().then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "查询成功") {
                vm.list = response.data.data;

            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };
    vm.trade1();

    // 已续投
    vm.trade2 = function(){
        vm.nav = 1;
        serviceHTTP.continueHTTP().then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "查询成功") {
                vm.list = response.data.data;

            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };

    // 已退出
    vm.trade3 = function(){
        vm.nav = 2;
        serviceHTTP.dropOutHTTP().then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "查询成功") {
                vm.list = response.data.data;

            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };
});
