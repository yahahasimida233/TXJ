app.controller("productCtrl",function ($http,$state,serviceHTTP,$stateParams){
    var vm = this;
    let id = $stateParams.id;



    // 从URL获取参数
    vm.productId = $stateParams.id || undefined;
    vm.productName = $stateParams.productName || undefined;
    vm.createBy = $stateParams.createBy || undefined;
    vm.status = $stateParams.state || undefined;
    vm.size = $stateParams.pageSize || 10;
    vm.page = $stateParams.pageNum || undefined;


    vm.getList = function(){
        let info = {
            id: vm.productId,
            productName:vm.productName,
            createBy:vm.createBy ,
            state:vm.status ,
            pageSize: vm.size,
            pageNum: vm.page
        };
        console.log("info:",info);
        serviceHTTP.productHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {
                vm.list = response.data.productList.list;
                vm.totalItems = response.data.productList.total;
                console.log(vm.list);
            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
        return info;
    };
    vm.getList();

    // 目前分页数据假数据没有提供，先写一下，正式接口中再做修改
    // vm.totalItems = 2;

    // 清除按钮
    vm.reset = function(){
        vm.productId = undefined;
        vm.productName = undefined;
        vm.createBy = undefined;
        vm.status = undefined;
        vm.size = 10;
        vm.page = 1;
        vm.getList();
    };


    vm.search = function(){

        $state.go('backStage.product', {
            id: vm.productId,
            productName: vm.productName,
            createBy: vm.createBy,
            state: vm.status,
            pageSize: vm.size,
            pageNum: vm.page
        })
    };


    // 删除功能
    vm.delete = function(id){
        bootbox.confirm({
            title: '操作提示',
            message: "<p style='text-align: center'>确认要删除这个产品？</p>",
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
                    serviceHTTP.productDeleteHTTP(id).then(function successCallback(response) {
                        // 请求成功执行代码
                        console.log(response);
                        if(response.data.message === "删除成功") {
                            bootbox.alert("删除成功");
                            $state.reload('backStage.product');
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








    vm.stateChange = function(a,b){

        if(b == 0){
            vm.tip ="<p style='text-align: center'>是否要下架该产品？</p>"
        }else {
            vm.tip ="<p style='text-align: center'>是否要上架该产品？</p>"
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
                    serviceHTTP.porductGroundingHTTP(a).then(function successCallback(response) {
                        // 请求成功执行代码
                        console.log(response);
                        if(response.data.message === "success") {
                            bootbox.alert("修改成功，即将刷新页面");
                            $state.reload('backStage.product');
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

});