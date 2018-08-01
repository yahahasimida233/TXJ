app.controller("updateCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;
    vm.check = function(){
        bootbox.dialog({
            message:"您已经是最新版本的不用更新了哟"
        })
    }
});