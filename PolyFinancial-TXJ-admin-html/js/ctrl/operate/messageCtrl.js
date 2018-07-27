app.controller("messageCtrl",function ($http,$state,serviceHTTP,$stateParams) {
    var vm = this;


    // 下面是日历插件的配置
    vm.startDate = "yyyy/MM/dd";
    vm.altInputFormats = ['yyyy/M!/d!'];
    vm.popup = {
        opened: false,
        opened2:false
    };
    vm.open = function () {
        vm.popup.opened = true;
    };
    vm.open2 = function(){
        vm.popup.opened2 = true;
    };
    vm.today = new Date();

    serviceHTTP.messageHTTP().then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response);
        if(response.data.message === "查询成功") {
            vm.list = response.data.data.articleList;
            vm.createByList = response.data.data.createByList;
            console.log(vm.list);
        }
        else {

        }
    }, function errorCallback(res) {
        // 请求失败执行代码
    });

    vm.cancel = function(id){
        serviceHTTP.messageCancelHTTP(id).then(function successCallback(response) {
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
    };

    // 删除消息
    vm.delete = function(id){
        bootbox.confirm({
            title: '操作提示',
            message: "<p style='text-align: center'>确认要删除这个消息？</p>",
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
                    serviceHTTP.messageDeleteHTTP(id).then(function successCallback(response) {
                        // 请求成功执行代码
                        console.log(response);
                        if(response.data.message === "删除成功") {
                            bootbox.alert("删除成功，页面即将刷新");
                            $state.reload('backStage.message');
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