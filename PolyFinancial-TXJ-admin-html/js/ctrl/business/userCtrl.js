app.controller("userCtrl",function ($scope,$http,$state,$stateParams,serviceHTTP) {
    let vm = this;

    vm.userId = $stateParams.id || undefined;
    vm.userName = $stateParams.actualName || undefined;
    vm.phone = $stateParams.phoneNum || undefined;
    vm.status = $stateParams.state || undefined;
    vm.size = $stateParams.size || undefined;
    vm.page = $stateParams.page || undefined;


    let info = {
        userID: vm.userId,
        actualName:vm.userName,
        phoneNum:vm.phone ,
        state:vm.status ,
        size: vm.size,
        page: vm.page
    };

    serviceHTTP.userListHTTP(info).then(function successCallback(response) {
        // 请求成功执行代码
        if(response.data.message === "success") {
            vm.list = response.data.data.accountList;
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
        vm.userId = undefined;
        vm.userName = undefined;
        vm.phone = undefined;
        vm.status = undefined;
    };


    vm.search = function(){

        $state.go('backstage.articleList', {
            'id': info.userID,
            'actualName': info.actualName,
            'phoneNum': info.phoneNum,
            'state': info.state,
            'size': info.size,
            'page': info.page
        })
    };


    //搜索用户列表功能
    vm.userSearch = function(){
        //搜索的四个值
        var userInfo = {
            userID: vm.userId,
            actualName:vm.userName,
            phoneNum:vm.phone,
            state:vm.status
        };
        serviceHTTP.userSearchHTTP(userInfo).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "success") {
                vm.list = response.data.data.accountList;
                console.log(vm.list);
            }
            else {

            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
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
                    serviceHTTP.bannerGroundingHTTP(a).then(function successCallback(response) {
                        // 请求成功执行代码
                        console.log(response);
                        if(response.data.message === "success") {
                            bootbox.alert("修改成功，即将刷新页面");
                            $state.reload('backStage.user');
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