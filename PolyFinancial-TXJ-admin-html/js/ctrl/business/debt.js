app.controller("debtCtrl",function ($http,$state,serviceHTTP,$stateParams){
    var vm = this;
    serviceHTTP.debtHTTP().then(function successCallback(response) {
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

    // 目前分页数据假数据没有提供，先写一下，正式接口中再做修改
    vm.totalItems = 2;

    // 清除按钮
    vm.reset = function(){
        vm.debtId= undefined;
        vm.companyName = undefined;
        vm.obligor= undefined;
        vm.status = undefined;
    };


    //搜索债权列表功能
    vm.userSearch = function(){
        //搜索的四个值
        var debtInfo = {
            userID: vm.userId,
            actualName:vm.userName,
            phoneNum:vm.phone,
            state:vm.status
        };
        serviceHTTP.debtHTTP(debtInfo).then(function successCallback(response) {
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
                        if(response.data.message === "success") {
                            bootbox.alert("删除成功");
                            $state.reload('backStage.debt');
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