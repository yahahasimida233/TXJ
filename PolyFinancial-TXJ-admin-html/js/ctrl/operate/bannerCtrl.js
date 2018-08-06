app.controller("bannerCtrl",function ($http,$state,serviceHTTP,$stateParams) {
    var vm = this;


    // 从URL获取参数
    vm.id = $stateParams.id || undefined;
    vm.title = $stateParams.title || undefined;
    vm.createBy = $stateParams.createBy || undefined;
    vm.updateBy = $stateParams.updateBy || undefined;
    vm.size = $stateParams.pageSize || 10;
    vm.page = $stateParams.pageNum || undefined;

    vm.getList = function(){
        let info = {
            id: vm.id,
            title:vm.title,
            createBy:vm.createBy ,
            updateBy:vm.updateBy ,
            pageSize: vm.size,
            pageNum: vm.page
        };
        console.log("info:",info);
        serviceHTTP.bannerHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {
                vm.list = response.data.banner.list;
                vm.totalItems = response.data.banner.total;
                console.log(vm.list);
            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };
    vm.getList();




    // // 目前分页数据假数据没有提供，先写一下，正式接口中再做修改
    // vm.totalItems = 2;

    // 清除按钮
    vm.reset = function(){
        vm.id= undefined;
        vm.title = undefined;
        vm.createBy= undefined;
        vm.updateBy = undefined;
        vm.size = 10;
        vm.page = 1;
        vm.getList();
    };

    //
    // //搜索功能
    // vm.userSearch = function(){
    //     //搜索的四个值
    //     var Info = {
    //         id: vm.id,
    //         pictureName:vm.title,
    //         createBy:vm.createBy,
    //         updateBy:vm.updateBy
    //     };
    //     serviceHTTP.bannerHTTP(Info).then(function successCallback(response) {
    //         // 请求成功执行代码
    //         if(response.data.message === "success") {
    //             vm.list = response.data.banner.list;
    //
    //             console.log(vm.totalItems);
    //         }
    //         else {
    //
    //         }
    //     }, function errorCallback(res) {
    //         // 请求失败执行代码
    //     });
    // };

    // 删除banner
    vm.delete = function(id){
        bootbox.confirm({
            title: '操作提示',
            message: "<p style='text-align: center'>确认要删除这个Banner？</p>",
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
                            $state.reload('backStage.banner');
                        }
                        else {

                        }
                    }, function errorCallback(res) {
                        // 请求失败执行代码
                    });

                }
            }
        })
    };

    // 搜索功能
    vm.search = function(){

        $state.go('backStage.banner', {
            id: vm.id,
            title: vm.title,
            createBy: vm.createBy,
            updateBy: vm.updateBy,
            pageSize: vm.size,
            pageNum: vm.page
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
                            $state.reload('backStage.banner');
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
