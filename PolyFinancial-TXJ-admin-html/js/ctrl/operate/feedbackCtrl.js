app.controller("feedbackCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams) {
    var vm = this;


    vm.getList = function(){
        let info = {
            id: $stateParams.id || undefined,
            submitBy:$stateParams.submitBy || undefined,
            keyword:$stateParams.keyword || undefined,
            phoneNum:$stateParams.phoneNum || undefined,
            size:  $stateParams.size || 10,
            page:$stateParams.page || undefined
        };
        console.log("info:",info);
        serviceHTTP.feedbackHTTP(info).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response);
            if(response.data.message === "查询成功") {
                vm.list = response.data.data.opinionList;
                console.log(vm.list);
                vm.totalItems = response.data.data.total;
                console.log(vm.list);
                // 从URL获取参数
                vm.id = $stateParams.id || undefined;
                vm.submitBy = $stateParams.submitBy || undefined;
                vm.keyword = $stateParams.keyword || undefined;
                vm.phoneNum = $stateParams.phoneNum || undefined;
                vm.size = $stateParams.size || 10;
                vm.page = $stateParams.page || undefined;
            }
            else {
                bootbox.alert(response.data.message)
            }
        }, function errorCallback(res) {
            // 请求失败执行代码
        });
    };
    vm.getList();



    // 清除按钮
    vm.reset = function(){
        vm.id= undefined;
        vm.submitBy = undefined;
        vm.keyword= undefined;
        vm.phoneNum = undefined;
        vm.page = 1;
        vm.size = 10;
        vm.search();
    };

    // 搜索功能
    vm.search = function(){
        $state.go('backStage.opinion', {
            id: vm.id,
            submitBy: vm.submitBy,
            keyword: vm.keyword,
            phoneNum: vm.phoneNum,
            size: vm.size,
            page: vm.page
        })
    };

    // 删除反馈
    vm.delete = function(id){
        bootbox.confirm({
            title: '操作提示',
            message: "<p style='text-align: center'>确认要删除这条意见？</p>",
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
                    serviceHTTP.feedbackDeleteHTTP(id).then(function successCallback(response) {
                        // 请求成功执行代码
                        console.log(response);
                        if(response.data.message === "删除成功") {
                            bootbox.alert("删除成功");
                            $state.reload('backStage.feedback');
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