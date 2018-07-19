app.controller("messageDetailedCtrl",function ($http,$state,serviceHTTP,$stateParams) {
    var vm = this;
    let id = $stateParams.id;
    serviceHTTP.messageDetailedHTTP(id).then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.message === "查询成功") {
            vm.list  = response.data.data;
            console.log(vm.list);
        }
        else {

        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });

});