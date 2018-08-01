app.controller("userCtrl",function ($scope,$http,$state,$stateParams,serviceHTTP) {
    let vm = this;

    // 从URL获取参数
    vm.userId = $stateParams.id || undefined;
    vm.userName = $stateParams.actualName || undefined;
    vm.phone = $stateParams.phoneNum || undefined;
    vm.status = $stateParams.state || undefined;
    vm.size = $stateParams.size || 10;
    vm.page = $stateParams.page || undefined;


    vm.getList = function(){
        let info = {
            id: vm.userId,
            actualName:vm.userName,
            phoneNum:vm.phone ,
            state:vm.status ,
            size: vm.size,
            page: vm.page
        };
        console.log("info:",info);
        serviceHTTP.userListHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {
                vm.list = response.data.data;
                vm.totalItems = response.data.total;
                console.log(vm.list);
            }
            else {
                console.log(response.data.message);
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
        vm.userId = undefined;
        vm.userName = undefined;
        vm.phone = undefined;
        vm.status = undefined;
        vm.size = 10;
        vm.page = 1;
        vm.getList();
    };


    vm.search = function(){

        $state.go('backStage.user', {
            id: vm.userId,
            actualName: vm.userName,
            phoneNum: vm.phone,
            state: vm.status,
            size: vm.size,
            page: vm.page
        })
    };



    vm.frozen = function (a,b) {

        if(b == 0){
            vm.tip ="<p style='text-align: center'>是否要冻结该用户？</p>"
        }else {
            vm.tip ="<p style='text-align: center'>是否要为该用户解冻？</p>"
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
                    serviceHTTP.userFrozenHTTP(a).then(function successCallback(response) {
                        // 请求成功执行代码
                        console.log(response);
                        if(response.data.message === "success") {
                            bootbox.alert("修改成功，即将刷新页面");
                            $state.reload('backStage.user');
                        }
                    }, function errorCallback(res) {
                        // 请求失败执行代码
                        bootbox.alert(response.data.message)
                    });

                }
            }
        })
    };

});