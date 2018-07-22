app.controller("feedbackDetailedCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams) {
    var vm = this;
    let id = $stateParams.id;
    serviceHTTP.feedbackDetailedHTTP(id).then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.message === "查询成功") {
            vm.list = response.data.data;
            console.log(vm.list);
        }
        else {
            bootbox.alert(response.data.message);
        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });
});