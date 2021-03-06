app.controller("settingCtrl",function ($scope,$http,$state,serviceHTTP,$stateParams,$timeout) {
    var vm = this;

    // 退出登录
    vm.exit = function(){
        bootbox.confirm({
            title: '操作提示',
            message: "<p style='text-align: center'>确认要退出登录么</p>",
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
                    serviceHTTP.logoutHTTP().then(function successCallback(response) {
                        // 请求成功执行代码
                        console.log(response);
                        if(response.data.code == 0) {
                            bootbox.alert("您已经退出登录");
                            sessionStorage.clear();
                            $state.go('home.mine')
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

    // 返回按钮
    vm.back = function(){
        var step  = sessionStorage.getItem('homeTitle');
        if(step == '我的'){
            $state.go('home.mine');
            return false
        }
        // 向父级作用域发送“我又肥来啦”的信息，用于启动画布
        $scope.$emit("backFS", 'go');
        $state.go('home');
        // window.history.back(-1);
    }
});