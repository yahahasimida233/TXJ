app.controller("productCtrl",function ($http,$state,serviceHTTP,$stateParams){
    var vm = this;
    let id = $stateParams.id;
    serviceHTTP.productHTTP(

    ).then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.message === "success") {
            vm.list = response.data.data;
            console.log(vm.list);
        }
        else {

        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });

});