app.controller("contractCtrl", function ($state, $stateParams, serviceHTTP, $timeout) {
    var vm = this;
    // 隐藏动画
    $timeout(function () {
        $(".indexLoading").hide(500);
    }, 0);

    vm.back = function(){
        window.history.back(-1);
    }

})