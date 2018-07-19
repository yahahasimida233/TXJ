app.controller("recommendCtrl",function ($http,$state,serviceHTTP,$stateParams) {
    var vm = this;
    serviceHTTP.recommendHTTP().then(function successCallback(response) {
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

    // 目前分页数据假数据没有提供，先写一下，正式接口中再做修改
    vm.totalItems = 2;

    // 清除按钮
    vm.reset = function(){
        vm.id= undefined;
        vm.title = undefined;
        vm.createBy= undefined;
        vm.updateBy = undefined;
    };


    //搜索债权列表功能
    vm.userSearch = function(){
        //搜索的四个值
        var Info = {
            id: vm.id,
            pictureName:vm.title,
            createBy:vm.createBy,
            updateBy:vm.updateBy
        };
        serviceHTTP.recommendHTTP(Info).then(function successCallback(response) {
            // 请求成功执行代码
            if(response.data.message === "success") {
                vm.list = response.data.data;
                console.log(vm.list);
            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
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
                    serviceHTTP.recommendDeleteHTTP(id).then(function successCallback(response) {
                        // 请求成功执行代码
                        if(response.data.message === "success") {
                            bootbox.alert("删除成功");
                            $state.reload('backStage.recommend');
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
                    serviceHTTP.recommendroundingHTTP().then(function successCallback(response) {
                        // 请求成功执行代码
                        console.log(response);
                        if(response.data.message === "success") {
                            bootbox.alert("修改成功，即将刷新页面");
                            $state.reload('backStage.');
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