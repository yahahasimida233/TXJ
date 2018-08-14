app.controller("userTradeCtrl",function ($http,$state,serviceHTTP,$stateParams) {
    var vm = this;
    vm.id = $stateParams.id;

    vm.getList = function(){
        let info = {
            id: $stateParams.id || undefined,
            pageSize: $stateParams.size || 10,
            pageNum: $stateParams.page || undefined
        };
        serviceHTTP.userTradeHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.code == 0) {
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
        $state.go('backStage.userTrade', {
            id: vm.id,
            size: vm.size,
            page: vm.page
        })
    };

});