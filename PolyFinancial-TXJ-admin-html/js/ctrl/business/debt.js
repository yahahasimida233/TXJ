app.controller("debtCtrl",function ($http,$state,serviceHTTP,$stateParams){
    var vm = this;
    
    vm.getList = function(){
        let info = {
            id: $stateParams.id || undefined,
            enterpriseName:$stateParams.enterpriseName || undefined,
            creditor:$stateParams.creditor || undefined ,
            state:$stateParams.state || undefined ,
            size: $stateParams.size || 10,
            page: vm.page
        };
        console.log("info:",info);
        serviceHTTP.debtHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {
                vm.list = response.data.data;
                vm.totalItems = response.data.total;
                console.log(vm.list);
                // 从URL获取参数
                vm.debtId = $stateParams.id || undefined;
                vm.companyName = $stateParams.enterpriseName || undefined;
                vm.obligor = $stateParams.creditor || undefined;
                vm.status = $stateParams.state || undefined;
                vm.size = $stateParams.size || 10;
                vm.page = $stateParams.page || undefined;
            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };
    vm.getList();

    // 搜索功能
    vm.search = function(){

        $state.go('backStage.debt', {
            id: vm.debtId,
            enterpriseName:vm.companyName,
            creditor:vm.obligor ,
            state:vm.status ,
            size: vm.size,
            page: vm.page
        })
    };


    // 目前分页数据假数据没有提供，先写一下，正式接口中再做修改
    // vm.totalItems = 2;

    // 清除按钮
    vm.reset = function(){
        vm.debtId= undefined;
        vm.companyName = undefined;
        vm.obligor= undefined;
        vm.status = undefined;
        vm.size = 10;
        vm.page = 1;
        vm.search();
    };




    vm.delete = function(id){
        bootbox.confirm({
            title: '操作提示',
            message: "<p style='text-align: center'>确认要删除这个债权？</p>",
            buttons: {
                cancel: {
                    label: '取消'
                },
                confirm: {
                    label: '确认'
                }
            },
            callback: function(result) {
                if(result === true){
                    serviceHTTP.debtDeleteHTTP(id).then(function successCallback(response) {
                        // 请求成功执行代码
                        console.log(response);
                        if(response.data.message === "success") {
                            bootbox.alert("删除成功");
                            $state.reload('backStage.debt');
                        }
                        else {
                            bootbox.alert(response.data.message);
                        }
                    }, function errorCallback(res) {
                        // 请求失败执行代码
                    });

                }
            }
        })
    };



});