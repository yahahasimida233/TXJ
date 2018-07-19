app.controller("feedbackCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams) {
    var vm = this;
    let id = $stateParams.id;
    serviceHTTP.feedbackHTTP().then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.message === "查询成功") {
            vm.list = response.data.data.opinionList;
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
        vm.submitBy = undefined;
        vm.keyword= undefined;
        vm.phoneNum = undefined;
    };


    //搜索债权列表功能
    vm.userSearch = function(){
        //搜索的四个值
        var Info = {
            id: vm.id,
            submitBy:vm.submitBy,
            keyword:vm.keyword,
            phoneNum:vm.phoneNum
        };
        serviceHTTP.feedbackHTTP(Info).then(function successCallback(response) {
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