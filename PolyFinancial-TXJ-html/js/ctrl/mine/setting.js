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
                    // serviceHTTP.loginOutHTTP(id).then(function successCallback(response) {
                    //     // 请求成功执行代码
                    //     console.log(response);
                    //     if(response.data.message === "success") {
                    //         bootbox.alert("删除成功");
                    //         $state.reload('backStage.debt');
                    //     }
                    //     else {
                    //         bootbox.alert(response.data.message);
                    //     }
                    // }, function errorCallback(res) {
                    //     // 请求失败执行代码
                    // });
                    bootbox.alert("您已经退出登录");

                    sessionStorage.clear();
                    $state.go('home.mine')


                }
            }
        })
    };

    vm.back = function(){
        var step  = sessionStorage.getItem('step');
        if(step === 'mine'){
            $state.go('home.mine');
            return false
        }
        // window.history.back(-1);
        $state.go('home');
    }
});