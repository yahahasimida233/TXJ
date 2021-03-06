app.controller("recommendCtrl",function ($http,$state,serviceHTTP,$stateParams) {
    var vm = this;

    vm.getList = function(){
        let info = {
            id: $stateParams.id || undefined,
            title:$stateParams.title || undefined,
            createBy:$stateParams.createBy || undefined ,
            updateBy:$stateParams.updateBy || undefined,
            pageSize: $stateParams.pageSize || 10,
            pageNum:  $stateParams.pageNum || undefined
        };
        console.log("info:",info);
        serviceHTTP.recommendHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {
                vm.list = response.data.banner.list;
                vm.totalItems = response.data.banner.total;
                console.log(vm.list);

                // 从URL获取参数
                vm.id = $stateParams.id || undefined;
                vm.title = $stateParams.title || undefined;
                vm.createBy = $stateParams.createBy || undefined;
                vm.updateBy = $stateParams.updateBy || undefined;
                vm.size = $stateParams.pageSize || 10;
                vm.page = $stateParams.pageNum || undefined;
            }
            else {
                bootbox.alert(response.data.message);
            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };
    vm.getList();


    // 清除按钮
    vm.reset = function(){
        vm.id= undefined;
        vm.title = undefined;
        vm.createBy= undefined;
        vm.updateBy = undefined;
        vm.size = 10;
        vm.page = 1;
        vm.search();
    };


    // 搜索功能
    vm.search = function(){

        $state.go('backStage.recommend', {
            id: vm.id,
            title: vm.title,
            createBy: vm.createBy,
            updateBy: vm.updateBy,
            pageSize: vm.size,
            pageNum: vm.page
        })
    };

    // 删除banner
    vm.delete = function(id){
        bootbox.confirm({
            title: '操作提示',
            message: "<p style='text-align: center'>确认要删除这个推荐么？</p>",
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
                    serviceHTTP.bannerDeleteHTTP(id).then(function successCallback(response) {
                        // 请求成功执行代码
                        if(response.data.message === "success") {
                            bootbox.alert("删除成功");
                            $state.reload('backStage.recommend');
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


    // 上下架操作
    vm.stateChange = function (a,b) {

        if(b == 0){
            vm.tip ="<p style='text-align: center'>是否要下架这个banner？</p>"
        }else {
            vm.tip ="<p style='text-align: center'>是否要上架这个banner？</p>"
        }
        bootbox.confirm({
            title: '操作提示',
            message: vm.tip,
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
                    serviceHTTP.bannerGroundingHTTP(a).then(function successCallback(response) {
                        // 请求成功执行代码
                        console.log(response);
                        if(response.data.message === "success") {
                            bootbox.alert("修改成功，即将刷新页面");
                            $state.reload('backStage.recommend');
                        }else{
                            bootbox.alert(response.data.message);
                        }
                    }, function errorCallback(res) {
                        // 请求失败执行代码
                        bootbox.alert("修改状态失败！请稍后再试")
                    });

                }
            }
        })
    };
});