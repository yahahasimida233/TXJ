app.controller("productEditCtrl",function ($http,$state,serviceHTTP,$stateParams){
    var vm = this;
    let id = $stateParams.id;
    if(id == 0){
        vm.title = "产品新增"

    }else{
        vm.title= "产品编辑";

    }

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