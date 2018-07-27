app.controller("loginCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

    // 调试用
    $timeout(function(){
        $(".indexLoading").hide(500);
    },0);
});