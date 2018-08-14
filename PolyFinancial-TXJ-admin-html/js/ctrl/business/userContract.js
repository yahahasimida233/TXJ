app.controller("userContractCtrl",function ($http,$state,serviceHTTP,$stateParams) {
    var vm = this;
    vm.id = $stateParams.id;
    vm.getList = function(){
        let info = {
            id: $stateParams.id || undefined,
            pageSize: $stateParams.size || 10,
            pageNum: $stateParams.page || undefined
        };
        serviceHTTP.userContractListHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {
                vm.list = response.data.data.list;
                vm.totalItems = response.data.data.total;
                console.log(vm.list);
                vm.size = $stateParams.size || 10;
                vm.page = $stateParams.page || undefined;
            }
            else {
                bootbox.alert(response.data.message);
            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };

    vm.getList();

    vm.search = function(){

        $state.go('backStage.userContract', {
            id: vm.id,
            size: vm.size,
            page: vm.page
        })
    };


    // 目前分页数据假数据没有提供，先写一下，正式接口中再做修改
    // vm.totalItems = 2;
});