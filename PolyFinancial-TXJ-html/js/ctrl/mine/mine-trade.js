app.controller("mineTradeCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

    // 验证是否登录，否则转跳到登陆页面
    vm.loginOrNot = (sessionStorage.getItem("login") == "true")? 1:0;
    if(vm.loginOrNot === 0){
        $state.go('login');
        return false;
    }

    // 已投资
    vm.trade1 = function(){
        vm.nav = 0;
    };

    // 已续投
    vm.trade2 = function(){
        vm.nav = 1;
    };

    // 已退出
    vm.trade3 = function(){
        vm.nav = 2;
    };
});
