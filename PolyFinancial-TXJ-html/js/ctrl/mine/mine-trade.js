app.controller("mineTradeCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

    // 验证是否登录，否则转跳到登陆页面
    // vm.loginOrNot = (sessionStorage.getItem("login") == "true")? 1:0;
    // if(vm.loginOrNot === 0){
    //     $state.go('login');
    //     return false;
    // }

    // vm.back = function(){
    //     window.history.back(-1);
    // };

    vm.continue = function(id){
        serviceHTTP.continuedInvestmentHTTP(id).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.code == 0) {
                bootbox.alert(response.data.message);
                vm.trade1();
            }
            else {
                bootbox.alert('操作失败，请稍后重试')
            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };

    // 已投资
    vm.trade1 = function(){
        vm.nav = 0;
        serviceHTTP.payedHTTP().then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.code == 0) {
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
            if(response.data.code == 0) {
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
            if(response.data.code == 0) {
                vm.list = response.data.data;

            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };

    $timeout(function(){
        var miniRefresh = new MiniRefresh({
            container: '#minirefresh',
            down: {
                callback: function() {
                    // 下拉事件

                    miniRefresh.endDownLoading();
                    if(vm.nav == 0){
                        vm.trade1();
                    }else if(vm.nav == 1){
                        vm.trade2();
                    }else if(vm.nav == 2){
                        vm.trade3();
                    }
                },
                successAnim:{
                    isEnable : true,
                    duration: 300
                }
            },
            up: {

                callback: function() {
                    // 上拉事件

                    // 注意，由于默认情况是开启满屏自动加载的，所以请求失败时，请务必endUpLoading(true)，防止无限请求
                    miniRefresh.endUpLoading(true);
                }
            }
        });
    },200);
});
