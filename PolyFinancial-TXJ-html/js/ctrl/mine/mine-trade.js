app.controller("mineTradeCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

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
