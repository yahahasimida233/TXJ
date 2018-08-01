app.controller("userContractDetailedCtrl",function ($http,$state,serviceHTTP,$stateParams) {
    var vm = this;
    let id = $stateParams.id,
        contractId =  $stateParams.contractId;
    vm.id = id;
    serviceHTTP.userContractHTTP(id,contractId).then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.message === "success") {
            vm.list = response.data.data[0];
            console.log(vm.list);
        }
        else {
            bootbox.alert(response.data.message)
        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });
});