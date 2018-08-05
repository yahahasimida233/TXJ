app.controller("feedbackReplyCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams) {
    var vm = this;
    vm.id = $stateParams.id;
    vm.change = function(){
        var info ={};
        info.id = vm.id;
        info.feedBackContent = vm.feedBackContent;
        serviceHTTP.feedbackReplyHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message == "反馈成功") {
                $state.go('backStage.feedback');
            }
            else {
                bootbox.alert(response.data.message);
            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };

});